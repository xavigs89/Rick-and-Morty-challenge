import { useState, useEffect } from "react";
import { mainButton } from "../styles";

import logic from "../logic";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const episodesPerPage = 20;

  useEffect(() => {
    logic
      .retrieveEpisodes(currentPage)
      .then((data) => {
        setEpisodes(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => {
        setError(error);
      });
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center space-y-4 bg-sky-950">
      <h1 className="text-3xl font-bold underline text-center text-white">
        Episodes List
      </h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={prevPage}
          className={mainButton}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-xl font-bold text-white">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={nextPage}
          className={mainButton}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <ul className="text-center space-y-4">
        {episodes.map((episode, index) => (
          <li key={episode.id} className="text-white">
            <strong>
              {index + 1 + (currentPage - 1) * episodesPerPage}. Name:{" "}
            </strong>
            {episode.name}
            <p>
              <strong>Air Date:</strong> {episode.air_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
