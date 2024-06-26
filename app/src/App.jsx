import { useContext, createContext, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import CharacterDetailsCard from "./components/CharacterDetailsCard";

const UpdatingCharacterContext = createContext(null);
export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

// const CharacterDetailsContext = createContext(null)
// export const useCharacterDetails = () => useContext(CharacterDetailsContext)

function App() {
  const [updatingCharacter, setUpdatingCharacter] = useState(null);
  // const [characterDetails, setCharacterDetails] = useState(null)

  return (
    <UpdatingCharacterContext.Provider
      value={{ updatingCharacter, setUpdatingCharacter }}
    >
      {/* <CharacterDetailsContext.Provider value= {{ characterDetails, setCharacterDetails}}> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailsCard />} />
      </Routes>
      {/* </CharacterDetailsContext.Provider> */}
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
