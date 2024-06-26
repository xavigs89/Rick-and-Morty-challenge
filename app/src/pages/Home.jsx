import { useState, useEffect, useContext } from "react";
import CharactersList from "../components/CharactersList";
import CharactersTable from "../components/CharactersTable";
import EditCharacterForm from "../components/EditCharacterForm";

import { useUpdatingCharacter } from "../App";

import logic from "../logic";

import { mainButton, filterButton } from "../styles";

function Home() {
  const [characters, setCharacters] = useState([]);
  const { updatingCharacter, setUpdatingCharacter } = useUpdatingCharacter();

  // const [detailsCharacter, setDetailsCharacter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchBar, setSearchBar] = useState("");
  const [searchName, setSearchName] = useState("");
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

  //SEARCH BAR BY NAME
  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchBar(event.target.value);
    setSearchName(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center mt-6">
        Welcome to Rick and Morty App!
      </h1>
      {/* {" "} */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button onClick={prevPage} className={mainButton}>
          Prev
        </button>
        <input
          className="p-2 border border-gray-400 rounded text-center"
          type="text"
          placeholder="Search characters..."
          value={searchBar}
          onChange={handleSearchInput}
        />
        <button onClick={nextPage} className={mainButton}>
          Next
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <span className="text-xl font-bold">
          {currentPage}/{totalPages}
        </span>
      </div>

      <div className="flex justify-center mt-4">
        <select
          className={filterButton}
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
        >
          <option value="">All Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <select
          className={filterButton}
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">All Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className={filterButton}
          value={gender}
          onChange={(event) => setGender(event.target.value)}
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
  );
}

export default Home;
