import { recorrerPeliculas, obtenerGeneros, crearOptionsGeneros, filtrarPeliculaPorGenero, filtrarPeliculaPorNombre, mostrarPeliculas, crearCardPelicula } from "./module/functions.js"

const cont_peli = document.getElementById("pelicula")
const $selectGenres = document.getElementById("genres")
const $selectDefault = document.getElementById("selectDefault")
const inputBusqueda = document.getElementById("search")


const options = {
    method: 'GET',
    headers: {
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch("https://moviestack.onrender.com/api/movies", options)
    .then(res => res.json())
    .then(movies => {
        const arrayMovies = movies.movies
        cont_peli.innerHTML = recorrerPeliculas(arrayMovies)

        //boton select -> hace un target value para recibir la opcion seleccionada, la filtra y la muestra
        $selectGenres.addEventListener("input", (e) => {
            const generoSeleccionado = e.target.value
            if (generoSeleccionado == $selectDefault.value) {
                mostrarPeliculas(arrayMovies)
            } else {
                const peliculaFiltradaPorGenero = filtrarPeliculaPorGenero(arrayMovies, generoSeleccionado)
                const peliculaFiltradaPorBusquedaYGenero = filtrarPeliculaPorNombre(peliculaFiltradaPorGenero, inputBusqueda.value)
                mostrarPeliculas(peliculaFiltradaPorBusquedaYGenero)
            }
        })

        //a traves de la funcion crearOptions crea un option por cada genero de pelicula
        const generos = obtenerGeneros(arrayMovies)
        $selectGenres.innerHTML += generos.reduce((templateAcumulado, genero) => templateAcumulado += crearOptionsGeneros(genero), "")

        //muestra a traves de la fuencion mostrarPeliculas la pelicula que coincida con el titulo ingresado
        inputBusqueda.addEventListener("input", () => {
            const peliculaFiltradaPorBusqueda = filtrarPeliculaPorNombre(arrayMovies, inputBusqueda.value)
            const peliculaFiltradaPorGeneroYBusqueda = filtrarPeliculaPorGenero(peliculaFiltradaPorBusqueda, $selectDefault.value)
            mostrarPeliculas(peliculaFiltradaPorGeneroYBusqueda)
        })


        const button_fav = document.querySelectorAll(".buttonFav")

        const actualizarFavoritosEnLocalStorage = (element) => {
            const storageFavoritos = JSON.parse(localStorage.getItem("favorites")) || []
        
            const peliculaIndex = storageFavoritos.findIndex(storageElement => storageElement.id === element.id)
            console.log(peliculaIndex)
        
            if (peliculaIndex === -1) {
                element.fav="true"
                storageFavoritos.push({ id: element.id, title: element.title, fav: element.fav})
            } else {
                element.fav="false"
                storageFavoritos.splice(peliculaIndex, 1)
            }

            const corazonElement = document.querySelector(`[data-id="${element.id}"]`);
            
            if (corazonElement) {
                corazonElement.classList.toggle('text-red-500', element.fav === 'true');
            }

            localStorage.setItem("favorites", JSON.stringify(storageFavoritos))
            console.log(storageFavoritos)
        };
        
        button_fav.forEach((pelicula) => {
            pelicula.addEventListener('click', () => {
                actualizarFavoritosEnLocalStorage(pelicula.dataset)
            });
        });        

    })
    .catch(err => console.log(err))
 