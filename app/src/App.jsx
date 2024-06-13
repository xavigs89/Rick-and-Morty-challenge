import { useState, useEffect, useContext, createContext } from "react";
import React from "react";
import CharactersList from "./components/CharactersList";
import CharactersTable from "./components/CharactersTable";
import EditCharacterForm from "./components/EditCharacterForm";

import { buttonClassName } from "./styles";

import "./App.css";

import logic from "./logic";

const UpdatingCharacterContext = createContext(null);

export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

function App() {
  const [characters, setCharacters] = useState([]);
  const [updatingCharacter, setUpdatingCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    loadCharacters();
  }, [currentPage]);

  console.log(currentPage);

  const loadCharacters = () => {
    //se ejecutará una vez cuando el componente se monte
    try {
      logic
        .retrieveCharacters(currentPage)
        .then((data) => {
          setCharacters(data.results); //Actualiza el estado con los datos recuperados
          setTotalPages(data.info.pages);
          console.log(totalPages)
        })
        .catch((error) => alert("error fetching data", error));
    } catch (error) {
      alert(error);
    }
  };

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
    <UpdatingCharacterContext.Provider value={{ setUpdatingCharacter }}>
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to Rick and Morty!
        </h1>
        <div className="flex justify-between items-center mt-4">
          <button onClick={prevPage} className={buttonClassName}>
            Prev
          </button>
          <span className="text-xl font-bold">
            {currentPage}/{totalPages}
          </span>
          <button onClick={nextPage} className={buttonClassName}>
            Next
          </button>
        </div>
        <CharactersList 
        characters={characters} />
        {updatingCharacter && (
          <EditCharacterForm
            characters={characters}
            setCharacters={setCharacters}
            character={updatingCharacter}
          />
        )}
        <CharactersTable 
        characters={characters} />
      </div>
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
