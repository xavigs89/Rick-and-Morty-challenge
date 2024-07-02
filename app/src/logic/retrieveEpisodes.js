function retrieveEpisodes (id) {
let episodeUrl = `https://rickandmortyapi.com/api/episode/${id}`

return fetch(episodeUrl)
.then((response) => response.json())
.catch((error) => alert("error fetching data", error))




}

export default retrieveEpisodes