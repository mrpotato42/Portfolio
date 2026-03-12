interface RoadmapConfig {
  deceleration: number;
  dragSensitivity: number;
  velocityTracker: number;
}

const CONFIG: RoadmapConfig = {
  deceleration: 0.95,
  dragSensitivity: 0.7,
  velocityTracker: 0.5,
};

const setupRoadmap = (containerId: string, progressId: string) => {
  const container = document.getElementById(containerId);
  const progressLine = document.getElementById(progressId);
  if (!container || !progressLine) return;

  const dots = Array.from(container.querySelectorAll('.roadmap-dot')) as HTMLElement[];

  // Set initial cursor
  container.style.cursor = 'grab';
  container.style.userSelect = 'none'; // Prevent text selection during drag

  // Lógica unificada de actualización visual
  const updateUI = () => {
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    // 1. Barra de progreso basada en el centro del viewport
    const viewportCenter = scrollLeft + clientWidth / 2;
    const scrollPercent = Math.max(0, Math.min(1, viewportCenter / scrollWidth));
    progressLine.style.width = `${scrollPercent * 100}%`;

    // 2. Activación de nodos (dots)
    dots.forEach((dot) => {
      const dotRect = dot.getBoundingClientRect();
      const dotCenter = dotRect.left + dotRect.width / 2;
      dot.classList.toggle('active', dotCenter <= containerCenter);
    });
  };

  container.addEventListener('scroll', updateUI);

  // Implementación de Drag para Mouse (Desktop/Hybrid)
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let velocity = 0;
  let prevX = 0;
  let animId: number | null = null;

  const applyMomentum = () => {
    if (Math.abs(velocity) < 0.3) {
      animId = null;
      return;
    }
    velocity *= CONFIG.deceleration;
    container.scrollLeft += velocity;
    animId = requestAnimationFrame(applyMomentum);
  };

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollStart = container.scrollLeft;
    prevX = e.pageX;
    velocity = 0;
    if (animId) cancelAnimationFrame(animId);
    container.style.cursor = 'grabbing';
  });

  const stopDragging = () => {
    if (!isDown) return;
    isDown = false;
    container.style.cursor = 'grab';
    if (Math.abs(velocity) > 0.5) animId = requestAnimationFrame(applyMomentum);
  };

  container.addEventListener('mouseup', stopDragging);
  container.addEventListener('mouseleave', stopDragging);

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();

    const dx = e.pageX - prevX;
    velocity = -dx * CONFIG.velocityTracker;
    prevX = e.pageX;

    const walk = (e.pageX - startX) * CONFIG.dragSensitivity;
    container.scrollLeft = scrollStart - walk;
  });

  // Posicionamiento inicial (Foco en el primer dot al ~20%)
  const firstDot = dots[0];
  if (firstDot) {
    const targetPosition = container.clientWidth * 0.20;
    container.scrollLeft = Math.max(0, firstDot.offsetLeft - targetPosition);
  }

  // Ejecución inicial
  updateUI();
};

// Inicialización de todas las secciones
document.querySelectorAll('.roadmap-section-group').forEach((_, index) => {
  setupRoadmap(`container-${index}`, `progress-${index}`);
});
