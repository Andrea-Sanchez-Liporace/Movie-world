// fetch anime
window.addEventListener("load", pagOnline);

function pagOnline () {
    // hacer el DOM de donde vayamos a hacer la busqueda
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", buscar);
    console.log(formulario);
}

function buscar(evento) {
    //console.log(evento);
    evento.preventDefault();

    //Creo un objeto para guardar la informacion del formulario
    const form = new FormData(this)
    //Guardo en busquedaRealizada lo que el usuario buscó
    const busquedaRealizada = form.get("busquedaUsuario");
    //Guardo en apiUrl la direccion de la api que voy a consultar
    const apiUrl = "https://www.omdbapi.com";
    API_KEY = "3c08695a";

    //Ver en la documentacion como hacer el fetch
    let fetchPromise = fetch(`${apiUrl}/?apikey=${API_KEY}&t=${busquedaRealizada}`);
    console.log(`${apiUrl}/?apikey=${API_KEY}&t=${busquedaRealizada}`);
    fetchPromise
    .then(response=>response.json())
    .then(consultaApi)
    .catch(error=>console.warn(error.message));
}

function consultaApi(infoPeli) {
    const resultadoConsulta = document.getElementById("respuesta");
    resultadoConsulta.innerHTML = `
    <div class="card" style="max-width: 540px;">
        <div class="row no-gutters">
        <div class="col-md-7">
            <img src="${infoPeli.Poster}" alt="Poster película" />
        </div>
        <div class="col-md-5">
            <div class="card-body">
            <h4 class="card-title">${infoPeli.Title}</h4>
            <p class="card-text">${infoPeli.Plot}</p>
            <p class="card-text"><small class="text-muted">Valoración: ${infoPeli.imdbRating}</small></p>
            </div>
        </div>
        </div>
    </div>
    `;
}