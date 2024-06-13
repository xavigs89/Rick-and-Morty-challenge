
function retrieveCharacters(page) {
return fetch (`https://rickandmortyapi.com/api/character?page=${page}`)

.then(response => response.json())
.catch(error => alert('error fetching data', error))
}


export default retrieveCharacters