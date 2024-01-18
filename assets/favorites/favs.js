import {crearCardPelicula} from "../module/functions.js"

const favoritos = document.getElementById("contFavorites");
const storageFavoritos = JSON.parse(localStorage.getItem("favorites")) || [];

const options = {
    method: 'GET',
    headers: {
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch("https://moviestack.onrender.com/api/movies", options)
    .then(res => res.json())
    .then(movies => {
        const arrayMovies = movies.movies;
            
        // Variable para acumular el HTML de las tarjetas
        let cardsHTML = '';

        // Utiliza el elemento favoritos para mostrar las tarjetas de películas favoritas
        storageFavoritos.forEach(peliculaFavorita => {
            const peliculaEncontrada = arrayMovies.find(pelicula => pelicula.id === peliculaFavorita.id);
            console.log(peliculaEncontrada)
            if (peliculaEncontrada) {
                // Acumula el HTML de la tarjeta
                cardsHTML += crearCardPelicula(peliculaEncontrada);
            }
        });
        favoritos.innerHTML = cardsHTML;
    })
    .catch(error => console.error('Error fetching movies:', error));
