
function retrieveCharacters() {
return fetch ('https://rickandmortyapi.com/api/character')

.then(response => response.json())
.catch(error => alert('error to fetch', error))
}


export default retrieveCharacters