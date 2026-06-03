const CONFIG = {
  deceleration: 0.95,
  dragSensitivity: 0.7,
  velocityTracker: 0.5,
  dragThreshold: 5,
} as const;

const setupRoadmap = (containerId: string, progressId: string) => {
  const container = document.getElementById(containerId);
  const progressLine = document.getElementById(progressId);
  if (!container || !progressLine) return;

  const scrollContent = container.firstElementChild as HTMLElement;
  const dots = Array.from(container.querySelectorAll('.roadmap-dot')) as HTMLElement[];
  if (!scrollContent || dots.length === 0) return;

  container.style.cursor = 'grab';
  container.style.userSelect = 'none';

  const dotCenter = (dot: HTMLElement, origin: number) =>
    dot.getBoundingClientRect().left - origin + dot.offsetWidth / 2;

  const updateUI = () => {
    const { scrollLeft, clientWidth, scrollWidth } = container;
    const origin = scrollContent.getBoundingClientRect().left;
    const dotPositions = dots.map((d) => dotCenter(d, origin));
    const n = dotPositions.length;
    // effectiveRange: el menor entre la distancia dot-a-dot y el límite físico de scroll.
    // Esto garantiza que progress=1 siempre sea alcanzable, aunque dotRange > maxScroll.
    const dotRange = dotPositions[n - 1] - dotPositions[0];
    const maxScroll = scrollWidth - clientWidth;
    const effectiveRange = Math.min(dotRange, maxScroll);
    const progress = effectiveRange > 0 ? Math.min(1, Math.max(0, scrollLeft / effectiveRange)) : 0;
    const currentX = dotPositions[0] + progress * dotRange;

    // Calcular progressX con easing trigonométrico entre dots, acotado al rango [first, last]
    let progressX = dotPositions[0];
    if (currentX >= dotPositions[n - 1]) {
      progressX = dotPositions[n - 1];
    } else if (currentX > dotPositions[0]) {
      for (let i = 0; i < n - 1; i++) {
        const [a, b] = [dotPositions[i], dotPositions[i + 1]];
        if (currentX <= b) {
          const ratio = (currentX - a) / (b - a);
          progressX = a + (b - a) * Math.sin(ratio * Math.PI / 2);
          break;
        }
      }
    }

    progressLine.style.width = `${(progressX / scrollContent.offsetWidth) * 100}%`;
    dots.forEach((dot, i) => dot.classList.toggle('active', dotPositions[i] <= progressX + 1));
  };

  container.addEventListener('scroll', updateUI);
  window.addEventListener('resize', updateUI);

  // Drag con mousemove/mouseup en document para capturar aunque el puntero
  // esté sobre un elemento hijo (texto, links, imágenes)
  const drag = { isDown: false, startX: 0, scrollStart: 0, velocity: 0, prevX: 0, hasDragged: false };
  let animId: number | null = null;

  const applyMomentum = () => {
    if (Math.abs(drag.velocity) < 0.3) { animId = null; return; }
    drag.velocity *= CONFIG.deceleration;
    container.scrollLeft += drag.velocity;
    animId = requestAnimationFrame(applyMomentum);
  };

  container.addEventListener('dragstart', (e) => e.preventDefault());

  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (animId) cancelAnimationFrame(animId);
    Object.assign(drag, { isDown: true, hasDragged: false, startX: e.pageX, prevX: e.pageX,
      scrollStart: container.scrollLeft, velocity: 0 });
    container.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!drag.isDown) return;
    drag.velocity = -(e.pageX - drag.prevX) * CONFIG.velocityTracker;
    drag.prevX = e.pageX;
    if (Math.abs(e.pageX - drag.startX) > CONFIG.dragThreshold) drag.hasDragged = true;
    container.scrollLeft = drag.scrollStart - (e.pageX - drag.startX) * CONFIG.dragSensitivity;
  });

  document.addEventListener('mouseup', () => {
    if (!drag.isDown) return;
    drag.isDown = false;
    container.style.cursor = 'grab';
    if (Math.abs(drag.velocity) > 0.5) animId = requestAnimationFrame(applyMomentum);
  });

  // Cancelar click si fue un drag real para no activar links accidentalmente
  container.addEventListener('click', (e) => {
    if (drag.hasDragged) { e.preventDefault(); e.stopPropagation(); drag.hasDragged = false; }
  }, true);

  // El pl-[25%] del HTML ya coloca el primer dot en pantalla; partimos desde scrollLeft=0
  container.scrollLeft = 0;
  updateUI();
};

document.querySelectorAll('.roadmap-section-group').forEach((_, i) =>
  setupRoadmap(`container-${i}`, `progress-${i}`)
);
