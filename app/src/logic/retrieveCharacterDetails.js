function retrieveCharacterDetails(id) {
  const characterUrl = `https://rickandmortyapi.com/api/character/${id}`;

  return fetch(characterUrl)
    .then((response) => response.json())
    .catch((error) => alert("error fetching data", error))

    .then((characterData) => {
      const locationUrl = characterData.location.url;
      const episodesUrls = characterData.episode;

      const locationPromise = fetch(locationUrl)
        .then((response) => response.json())
        .catch((error) => alert("error fetching location data", error));

      const episodesPromises = episodesUrls.map((episodeUrl) =>
        fetch(episodeUrl).then((response) => {
          if (!response.ok) {
            throw new Error("error fetching episode data");
          }
          return response.json();
        })
      );

      return Promise.all([locationPromise, ...episodesPromises]).then(
        (results) => {
          const [locationData, ...episodesData] = results;
          return {
            character: characterData,
            location: locationData,
            episodes: episodesData,
          };
        }
      );
    })
    .catch((error) => alert("error fetching data", error));
}
export default retrieveCharacterDetails;
