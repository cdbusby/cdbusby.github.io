import './sass/style.scss';

// Init Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

(function() {

  // Selectors
  const html = document.querySelector('html');
  const date = document.querySelector('.js-year');

  // Data
  const year = new Date().getFullYear();

  // Actions
  html.classList.remove('no-js');
  date.innerHTML = year.toString();

})();