import { translations, type Language } from '../i18n/translations';

const applyLanguage = (lang: Language) => {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as keyof typeof translations['en'];
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update toggle button text
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.textContent = lang === 'en' ? 'ES' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
  }

  // Update CV download link attributes
  const cvBtn = document.getElementById('cv-download-btn') as HTMLAnchorElement;
  if (cvBtn) {
    cvBtn.href = translations[lang].cvLink;
    cvBtn.download = translations[lang].cvName;
  }

  // Store preference
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
};

// Initialize
const savedLang = (localStorage.getItem('lang') as Language) || 'en';
applyLanguage(savedLang);

// Toggle handler
document.getElementById('lang-toggle')?.addEventListener('click', () => {
  const current = (localStorage.getItem('lang') as Language) || 'en';
  const next: Language = current === 'en' ? 'es' : 'en';
  applyLanguage(next);
});
