/* Aretê Academy: o menu do celular. Sem dependência, sem build. */
(function () {
  'use strict';

  var alternar = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  if (!alternar || !nav) return;

  function definir(aberto) {
    nav.classList.toggle('is-open', aberto);
    alternar.setAttribute('aria-expanded', String(aberto));
    alternar.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  }

  alternar.addEventListener('click', function () {
    definir(!nav.classList.contains('is-open'));
  });

  /* Um link dentro do menu aberto: navega e fecha. */
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) definir(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      definir(false);
      alternar.focus();
    }
  });
})();
