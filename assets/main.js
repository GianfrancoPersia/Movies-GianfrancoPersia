import {recorrerPeliculas,obtenerGeneros,crearOptionsGeneros,filtrarPeliculaPorGenero,filtrarPeliculaPorNombre,mostrarPeliculas} from "./module/functions.js"

//data aux para no modificar el original
const pelis = peli

const cont_peli = document.getElementById("pelicula")

cont_peli.innerHTML = recorrerPeliculas(pelis)



// FILTRAR PELICULAS POR GENERO
const $selectGenres = document.getElementById("genres")
const $selectDefault = document.getElementById("selectDefault")

//boton select -> hace un target value para recibir la opcion seleccionada, la filtra y la muestra
$selectGenres.addEventListener("input",(e)=>{
    const generoSeleccionado = e.target.value
    if(generoSeleccionado==$selectDefault.value){
        mostrarPeliculas(pelis)
    }else{
        const peliculaFiltradaPorGenero = filtrarPeliculaPorGenero(pelis,generoSeleccionado)
        mostrarPeliculas(peliculaFiltradaPorGenero)
    }
})

//a traves de la funcion crearOptions crea un option por cada genero de pelicula
const generos = obtenerGeneros(pelis)
$selectGenres.innerHTML += generos.reduce((templateAcumulado, genero)=> templateAcumulado += crearOptionsGeneros(genero),"")



// FILTRAR PELICULAS POR NOMBRE
const inputBusqueda = document.getElementById("search")

//muestra a traves de la fuencion mostrarPeliculas la pelicula que coincida con el titulo ingresado
inputBusqueda.addEventListener("input",()=>{
    const peliculaFiltradaPorBusqueda = filtrarPeliculaPorNombre(pelis,inputBusqueda.value)
    mostrarPeliculas(peliculaFiltradaPorBusqueda)
})



