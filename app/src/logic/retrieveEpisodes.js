function retrieveEpisodes(page) {
  let episodeUrl = `https://rickandmortyapi.com/api/episode?page=${page}`;

  return fetch(episodeUrl)
    .then((response) => response.json())
    .catch((error) => alert("error fetching data", error));
}

export default retrieveEpisodes;
