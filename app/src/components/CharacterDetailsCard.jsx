import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import logic from "../logic";
import { mainButton } from "../styles";

function CharacterDetailsCard() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    logic
      .retrieveCharacterDetails(id)
      .then(({ character, location, episodes }) => {
        setCharacter(character);
        setLocation(location);
        setEpisodes(episodes);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);

  if (!character || !location || episodes.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <article className="min-h-screen bg-cover bg-center flex flex-col items-center space-y-4 bg-sky-950">
      <div className="text-center ">
        <div className="mt-4 text-left">
          <button onClick={() => navigate("/")} className={mainButton}>
            Go Back
          </button>
        </div>
        <h1 className="text-xl font-bold mb-4 underline text-white">
          {character.name} Details
        </h1>
        <div className="mx-auto max-w-2xl border border-gray-300 shadow-md rounded-lg p-4 bg-white">
          <h3 className="text-lg font-bold underline">Location</h3>
          <p>
            <strong>Location Name:</strong> {location.name}
          </p>
          <p>
            <strong>Type:</strong> {location.type}
          </p>
          <p>
            <strong>Dimension:</strong> {location.dimension}
          </p>
          <p>
            <strong>Amount of Residents:</strong> {location.residents.length}
          </p>
          <h3 className="text-lg font-bold mt-4 underline">Episodes</h3>
          <ul className="text-center mt-2">
            {episodes.map((episode) => (
              <li key={episode.id}>
                <p>
                  <strong>Episodes Name:</strong> {episode.name}
                </p>
                <p>
                  <strong>Air Date:</strong> {episode.air_date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default CharacterDetailsCard;
