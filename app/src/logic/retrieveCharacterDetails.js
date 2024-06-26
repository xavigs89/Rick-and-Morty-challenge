
function retrieveCharacterDetails(id, character, location, episodes) {
let mainUrl = `https://rickandmortyapi.com/api/character/${id}`


return fetch(mainUrl)
    .then((response) => response.json())
    .catch((error) => alert("error fetching data", error));

}
export default retrieveCharacterDetails