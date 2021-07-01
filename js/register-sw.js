// Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js')
      .then(reg => {
        console.log("Service worker esta listo!");
      });
}
else {
  console.log("Service worker no soportado.");
}

// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  document.querySelector('body').classList.add('offline');
  document.querySelector('body').innerHTML = "No se puede obtener la información! La aplicacion esta offline!"
});

window.addEventListener('online', event => {
  document.querySelector('body').classList.remove('offline');
  consultaApi();
});

if (!navigator.onLine) {
  document.querySelector('body').classList.add('offline');
  main.innerHTML = "No se puede obtener la información! La aplicacion esta offline!"
}