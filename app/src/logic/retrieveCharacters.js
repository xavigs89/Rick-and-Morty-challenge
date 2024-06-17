function retrieveCharacters(page, species, status, gender) {
  let mainUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

  if (species) {
    mainUrl = mainUrl + `&species=${species}`;
  }

  if (status) {
    mainUrl = mainUrl + `&status=${status}`;
  }

  if (gender) {
    mainUrl = mainUrl + `&gender=${gender}`;
  }

  return fetch(mainUrl)
    .then((response) => response.json())
    .catch((error) => alert("error fetching data", error));
}

export default retrieveCharacters;

//FUNCION ORIGINAL
// function retrieveCharacters(page) {
//     return fetch (`https://rickandmortyapi.com/api/character?page=${page}`)

//     .then(response => response.json())
//     .catch(error => alert('error fetching data', error))
