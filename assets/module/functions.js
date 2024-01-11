export function crearCardPelicula (pelicula){
    return `
        <a href="./itemDetail/detail.html?id=${pelicula.id}" class="flex flex-col h-80 w-52 text-white bg-purple-500 line-clamp-3 hover:opacity-85">
            <div class="flex flex-col">
                <img src=${pelicula.image} alt="movie image">
                <div class="flex flex-col grow items-center">
                    <h3 class="font-semibold text-xl p-2 w-full text-center bg-purple-600">${pelicula.title}</h3>
                    <p class="flex grow items-center shadow-inner line-clamp-3 p-2">${pelicula.overview}</p> 
                </div>
            </div>
        </a>
    `
}

export function recorrerPeliculas(array){
    let aux=""
    for (const pelicula of array) { 
        aux+=crearCardPelicula(pelicula)
    }
    return aux
}



//filtra el array de peliculass por genero y se fija si incluye el genero seleccionado por el usuario
export function filtrarPeliculaPorGenero(arrayPeliculas,generoSeleccionado){
    return arrayPeliculas.filter(pelicula => pelicula.genres.includes(generoSeleccionado))
}

// filtra y guarda en un array nuevo los generos de todas las peliculas
export function obtenerGeneros (arrayPeliculas) {
    const generos = arrayPeliculas
                                .map(pelicula => pelicula.genres)
                                .flat()
                                .filter((genero, index, arrayPeliculas) => {
                                    return arrayPeliculas.indexOf(genero) === index
                                })

    return generos
}

//genera un option en el select 
export function crearOptionsGeneros(genero){
    return `
        <option value="${genero}">${genero}</option>
    `
}

//busca el filtro en el array y muestra las peliculas filtradas
export function mostrarPeliculas(arrayPeliculas) {
    const cont_peli = document.getElementById("pelicula")
    const peliculasFiltradas = recorrerPeliculas(arrayPeliculas)
    cont_peli.innerHTML = peliculasFiltradas
}


// filtra el array de peliculas por titulo y retorna la pelicula que incluya en su titulo lo ingresado por el input busqueda
export function filtrarPeliculaPorNombre(arrayPeliculas,nombreIngresado){
    return arrayPeliculas.filter(pelicula => pelicula.title.toLowerCase().includes(nombreIngresado.toLowerCase()))
}