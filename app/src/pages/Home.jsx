import { useState, useEffect } from "react";

import { useUpdatingCharacter } from "../App";

import CharactersList from "../components/CharactersList";
import CharactersTable from "../components/CharactersTable";
import EditCharacterForm from "../components/EditCharacterForm";

import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

import logic from "../logic";

function Home() {
  const [characters, setCharacters] = useState([]);
  const { updatingCharacter, setUpdatingCharacter } = useUpdatingCharacter();

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //SEARCH BAR
  const [searchBar, setSearchBar] = useState("");
  const [searchName, setSearchName] = useState("");

  //FILTERS
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    loadCharacters();
  }, [currentPage, species, status, gender, searchName]);

  const loadCharacters = () => {
    //se ejecutará una vez cuando el componente se monte
    try {
      logic
        .retrieveCharacters(currentPage, species, status, gender, searchName)
        .then((data) => {
          setCharacters(data.results); //Actualiza el estado con los datos recuperados
          setTotalPages(data.info.pages);
        })
        .catch((error) => alert("error fetching data", error));
    } catch (error) {
      alert(error);
    }
  };

  
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center space-y-4 bg-sky-950">
      <h1 className="text-3xl font-bold underline text-center mt-6 text-white">
        Welcome to Rick and Morty App!
      </h1>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <SearchBar 
        searchBar={searchBar} 
        setSearchBar={setSearchBar} 
        setSearchName={setSearchName}
        />

      <Filters
        species={species}
        setSpecies={setSpecies}
        status={status}
        setStatus={setStatus}
        gender={gender}
        setGender={setGender}
      />

      <CharactersList characters={filteredCharacters} />
      {updatingCharacter && (
        <EditCharacterForm
          characters={characters}
          setCharacters={setCharacters}
          character={updatingCharacter}
        />
      )}

      <CharactersTable 
        characters={filteredCharacters} 
      />
    </div>
  );
}

export default Home;