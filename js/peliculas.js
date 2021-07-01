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
    const apiUrl = "http://www.omdbapi.com";
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
    <img src="${infoPeli.Poster}"/>
    <h4>${infoPeli.Title}</h4>
    <p>${infoPeli.Plot}</p>
    <p>${infoPeli.imdbRating}</p>
    `;
}