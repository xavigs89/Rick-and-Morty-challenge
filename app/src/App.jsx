import { useState, useEffect, useContext, createContext } from "react";
import React from "react";
import CharactersList from "./components/CharactersList";
import CharactersTable from "./components/CharactersTable";
import EditCharacterForm from "./components/EditCharacterForm";

import { buttonClassName } from "./styles"

import "./App.css";

import logic from "./logic";

const UpdatingCharacterContext = createContext(null);

export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

function App() {
  const [characters, setCharacters] = useState([]);

  const [updatingCharacter, setUpdatingCharacter] = useState(null);

  // estilos de los botones, se pueden exportar en un archivo suelto
  // const buttonClassName = "bg-[#249D8C] text-white font-bold py-2 px-4 rounded";

  useEffect(() => {
    try {
      logic
        .retrieveCharacters()
        .then((data) => {
          setCharacters(data.results);
        })
        .catch((error) => alert("error to fetch", error));
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <>
      <UpdatingCharacterContext.Provider value={{ setUpdatingCharacter }}>
        <div>
          <h1 className="text-3xl font-bold underline">
            Welcome to Rick and Morty!
          </h1>
          <div className="flex justify-between mt-4">
            <button className={buttonClassName}>Previous</button>
            <button className={buttonClassName}>Next</button>
          </div>
          <CharactersList characters={characters} />

          {updatingCharacter && (
            <EditCharacterForm
              characters={characters}
              setCharacters={setCharacters}
              character={updatingCharacter}
            />
          )}

          <CharactersTable characters={characters} />
        </div>
      </UpdatingCharacterContext.Provider>
    </>
  );
}

export default App;
