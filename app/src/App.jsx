import React from 'react'
import CharactersList from './components/CharactersList'
import CharactersTable from './components/CharactersTable'
import EditCharacterForm from './components/EditCharacterForm'

import './App.css'

import { useState, useEffect, useContext, createContext } from 'react'
import logic from './logic'


const UpdatingCharacterContext = createContext(null)

export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext)

function App() {

  const [characters, setCharacters] = useState([])

  const [updatingCharacter, setUpdatingCharacter] = useState(null)

  useEffect(() => {
    try {
      logic.retrieveCharacters()
        .then(data => {
          setCharacters(data.results)
        })
        .catch(error => alert('error to fetch', error))

    } catch (error) {
      alert(error)
    }
  }, [])



  return <>

    <UpdatingCharacterContext.Provider value={{ setUpdatingCharacter }}>
      <div >
        <h1 className="text-3xl font-bold underline">Welcome to Rick and Morty!</h1>
        <CharactersList
          characters={characters} />

        {updatingCharacter && <EditCharacterForm
          characters={characters}
          setCharacters={setCharacters}
          character={updatingCharacter} />}

        <CharactersTable
          characters={characters} />

      </div>
    </UpdatingCharacterContext.Provider>

  </>

}

export default App