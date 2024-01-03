const pelis = peli      //data aux para no modificar el original

const cont_peli = document.getElementById("pelicula")

function crearCardPelicula (pelicula){
    return `
        <div class="flex flex-col h-80 w-52 text-white bg-purple-500">
            <img src=${pelicula.image} alt="movie image">
            <div class="flex flex-col grow  line-clamp-3 items-center">
                <h3 class="font-semibold text-xl p-2 w-full text-center bg-purple-600">${pelicula.title}</h3>
                <p class="flex grow items-center shadow-inner p-2">${pelicula.overview}</p> 
            </div>
        </div>
    
    `
}

function recorrerPeliculas(array){
    let aux=""
    for (const pelicula of array) { 
        aux+=crearCardPelicula(pelicula)
    }
    return aux
}
cont_peli.innerHTML = recorrerPeliculas(pelis)