// Ejecuta de inmediato si el DOM ya cargó, o espera si aún se está construyendo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarApp);
} else {
  iniciarApp();
}

function iniciarApp() {
  initHamburguesa();
  initDarkMode();
  initSmoothScroll();
  initFormulario();
}

/* 1. Menú Hamburguesa Móvil */
function initHamburguesa() {
  const btn = document.querySelector('#hamburger-btn');
  const menu = document.querySelector('#nav-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en cualquier enlace
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* 2. Toggle Dark Mode con LocalStorage */
function initDarkMode() {
  const toggle = document.querySelector('#dark-mode-toggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
}

/* 3. Smooth Scroll Accesible */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* 4. Validación del Formulario de Contacto */
function initFormulario() {
  const form = document.querySelector('#form-contacto');
  const feedback = document.querySelector('#form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const mensaje = document.querySelector('#mensaje');

    document.querySelectorAll('.mensaje-error').forEach(el => el.textContent = '');

    if (!nombre.value.trim()) {
      document.querySelector('#error-nombre').textContent = 'El nombre es obligatorio.';
      esValido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.querySelector('#error-email').textContent = 'Ingresa un correo electrónico válido.';
      esValido = false;
    }

    if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
      document.querySelector('#error-mensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
      esValido = false;
    }

    if (esValido) {
      feedback.style.color = '#38a169';
      feedback.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
      form.reset();
      setTimeout(() => { feedback.textContent = ''; }, 5000);
    } else {
      feedback.style.color = '#e53e3e';
      feedback.textContent = 'Por favor corrige los errores indicados.';
    }
  });
}