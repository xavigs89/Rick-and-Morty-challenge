import { useState, useEffect } from "react"

import CharactersCard from "../components/CharactersCard"

import logic from "../logic";

function Episodes (episodeId) {
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        logic.retrieveEpisodes(episodeId)
          .then((data) => {
            setEpisode(data);
          })
          .catch((err) => {
            setError(err);
          });
      }, [episodeId]);
}

export default Episodes