import { useState, useEffect, useContext, createContext } from "react";
import React from "react";
import CharactersList from "./components/CharactersList";
import CharactersTable from "./components/CharactersTable";
import EditCharacterForm from "./components/EditCharacterForm";

import { mainButton, filterButton } from "./styles";


import "./App.css";

import logic from "./logic";

const UpdatingCharacterContext = createContext(null);

export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

function App() {
  const [characters, setCharacters] = useState([]);
  const [updatingCharacter, setUpdatingCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchBar, setSearchBar] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    loadCharacters();
  }, [currentPage, species, status, gender]);

  const loadCharacters = () => {
    //se ejecutará una vez cuando el componente se monte
    try {
      logic
        .retrieveCharacters(currentPage, species, status, gender)
        .then((data) => {
          setCharacters(data.results); //Actualiza el estado con los datos recuperados
          setTotalPages(data.info.pages);
        })
        .catch((error) => alert("error fetching data", error));
    } catch (error) {
      alert(error);
    }
  };

  //PAGINATION
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

  //SEARCH BAR
  const handleSearchInput = (event) => {
    setSearchBar(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <UpdatingCharacterContext.Provider value={{ setUpdatingCharacter }}>
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to Rick and Morty!
        </h1>

        <div className="flex justify-between items-center mt-4">
          <button onClick={prevPage} className={mainButton}>
            Prev
          </button>
          <span className="text-xl font-bold">
            {currentPage}/{totalPages}
          </span>
          <button onClick={nextPage} className={mainButton}>
            Next
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <input
            className="p-2 border border-gray-400 rounded"
            type="text"
            placeholder="Search characters..."
            value={searchBar}
            onChange={handleSearchInput}
          />
        </div>

        <div className="flex justify-center mt-4">
          <select
            className={filterButton}
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            <option value="">All Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
          <select
            className={filterButton}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            className={filterButton}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <CharactersList characters={filteredCharacters} />
        {updatingCharacter && (
          <EditCharacterForm
            characters={characters}
            setCharacters={setCharacters}
            character={updatingCharacter}
          />
        )}
        <CharactersTable characters={filteredCharacters} />
      </div>
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
