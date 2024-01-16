
export function crearCardPelicula (pelicula){

    const corazonColor = pelicula.fav === "true" ? 'text-red-500' : "text-white"
    
    return `
        <div class="flex flex-col h-[350px] w-52 text-white bg-purple-500 line-clamp-4 grow">
                <img src=${"https://moviestack.onrender.com/static/"+pelicula.image} alt="movie image">
                <div class="flex flex-col items-center">
                    <h3 class="font-medium p-2 w-full flex justify-center items-center bg-purple-600 h-[72px] text-center">${pelicula.title}</h3>
                    <p class="flex items-center shadow-inner p-2 text-justify text-sm">${pelicula.overview}</p> 
                </div>
                <div class="flex mx-2 justify-between items-center grow">
                    <a href="./itemDetail/detail.html?id=${pelicula.id}" class="bg-white text-purple-600 p-1.5 rounded-xl font-medium hover:opacity-80">View Detail</a>
                    <i class="buttonFav fa-solid fa-heart text-3xl ${corazonColor} cursor-pointer hover:text-zinc-300" data-fav="${pelicula.fav}" data-id=${pelicula.id} data-title=${pelicula.title}></i>
                </div>
        </div>
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
    const arrayFiltradoPorGenero = arrayPeliculas.filter(pelicula => pelicula.genres.includes(generoSeleccionado))
    if (generoSeleccionado == "Select a genre"){
        return arrayPeliculas
    }else{
        return arrayFiltradoPorGenero
    }
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
    const arrayFiltradoPorNombre = arrayPeliculas.filter(pelicula => pelicula.title.toLowerCase().includes(nombreIngresado.toLowerCase()))

    return arrayFiltradoPorNombre
}




