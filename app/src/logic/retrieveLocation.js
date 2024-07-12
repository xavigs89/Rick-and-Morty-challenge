function retrieveLocation(page) {
  let locationUrl = `https://rickandmortyapi.com/api/location?page=${page}`;

  return fetch(locationUrl)
    .then((response) => response.json())
    .catch((error) => alert("error fetching data", error));
}

export default retrieveLocation;
