const queryParams = new URLSearchParams(location.search)

const id = queryParams.get("id")

const movieDetail = document.getElementById("detalle")

const options = {
    method: 'GET',
    headers:{
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch ("https://moviestack.onrender.com/api/movies",options)
.then(res => res.json())
.then(movies => {
    const arrayMovies = movies.movies
    const moviesId = arrayMovies.find(pelicula => pelicula.id == id)

    movieDetail.innerHTML = `
        <div class="flex flex-wrap text-white w-full gap-14 py-10"> 
            <div class="flex w-full">
                <article class="flex w-3/6 justify-center">
                    <img src="${"https://moviestack.onrender.com/static/"+moviesId.image}" alt="">
                </article>
                <article class="flex flex-col w-3/6 gap-4 pr-14">
                    <h1 class="text-2xl font-bold">${moviesId.title}</h1>
                    <h2 class="text-xl font-semibold">${moviesId.tagline}</h2>
                    <p>${moviesId.genres}</p>
                    <p>${moviesId.overview}</p>
                </article>
            </div>

            <div class="flex w-full bg-purple-500 p-10">
                <article class="flex w-3/6 justify-center">

                    <table class="border-2 border-white border-collapse w-72">
                        <tr class="border-2 border-white">
                            <td class="p-2">Original language</td>
                            <td class="p-2">${moviesId.original_language}</td>
                        </tr>
                        <tr class="border-2 border-white">
                            <td class="p-2">Release date</td>
                            <td class="p-2">${moviesId.release_date}</td>
                        </tr border-2 border-white>
                        <tr class="border-2 border-white">
                            <td class="p-2">Runtime</td>
                            <td class="p-2">${moviesId.runtime} mins</td>
                        </tr>
                        <tr class="border-2 border-white">
                            <td class="p-2">Status</td>
                            <td class="p-2">${moviesId.status}</td>
                        </tr>
                    </table>
                </article>
            
                <article class="flex w-3/6 justify-center">

                    <table class="border-2 border-white border-collapse w-72">
                        <tr class="border-2 border-white">
                            <td class="p-2">Vote average</td>
                            <td class="p-2">${moviesId.vote_average} % </td>
                        </tr>
                        <tr class="border-2 border-white">
                            <td class="p-2">Budget</td>
                            <td class="p-2">${moviesId.budget.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
                        </tr border-2 border-white>
                        <tr class="border-2 border-white">
                            <td class="p-2">Revenue</td>
                            <td class="p-2">${moviesId.revenue.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
                        </tr>
                    </table>
                </article>
            </div>
`

})
