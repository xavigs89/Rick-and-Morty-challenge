import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import logic from "../logic";

function CharacterDetailsCard({ location, episodes}) {
  const { id } = useParams();
//   const [character, setCharacter] = useState(null);
//   const [location, setLocation] = useState(null);
//   const [episodes, setEpisodes] = useState([]);

  return (
    <div>
      <h1>Character Details</h1>
      {/* <p>
        <strong>Location Name:</strong> {location.name}
      </p>
      <p>
        <strong>Location type:</strong> {location.type}
      </p>
      <p>
        <strong>Location dimension:</strong> {location.dimension}
      </p>
      <p>
        <strong>Location residents:</strong> {location.residents}
      </p>

      <p>
        <strong>Episodes name:</strong> {episodes.name}
      </p>
      <p>
        <strong>Episodes air date:</strong> {episodes.air_date}
      </p> */}
    </div>
  );
}

export default CharacterDetailsCard;
