import {recorrerPeliculas,obtenerGeneros,crearOptionsGeneros,filtrarPeliculaPorGenero,filtrarPeliculaPorNombre,mostrarPeliculas} from "./module/functions.js"

//data aux para no modificar el original
const pelis = peli

const cont_peli = document.getElementById("pelicula")

cont_peli.innerHTML = recorrerPeliculas(pelis)



// FILTRAR PELICULAS POR GENERO
const $selectGenres = document.getElementById("genres")
const $selectDefault = document.getElementById("selectDefault")

//boton select -> hace un target value para recibir la opcion seleccionada, la filtra y la muestra
console
$selectGenres.addEventListener("input",(e)=>{
    const generoSeleccionado = e.target.value
    if(generoSeleccionado==$selectDefault.value){
        mostrarPeliculas(pelis)
    }else{
        const peliculaFiltradaPorGenero = filtrarPeliculaPorGenero(pelis,generoSeleccionado)
        const peliculaFiltradaPorBusquedaYGenero = filtrarPeliculaPorNombre(peliculaFiltradaPorGenero,inputBusqueda.value)
        mostrarPeliculas(peliculaFiltradaPorBusquedaYGenero)
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
    const peliculaFiltradaPorGeneroYBusqueda = filtrarPeliculaPorGenero(peliculaFiltradaPorBusqueda,$selectDefault.value)
    mostrarPeliculas(peliculaFiltradaPorGeneroYBusqueda )
})

console.log(pelis)


const array =[1,2,3,4,5]

const arrayDuplicado = array.map(numero=>numero*2)

const numeroMayorCuatro = arrayDuplicado.filter(numero => numero>4)
console.log(numeroMayorCuatro)

const mayorAMenor = array.sort()
console.log(mayorAMenor)

for (const numero of array) {
    console.log(numero)
}

console.log(arrayDuplicado)


