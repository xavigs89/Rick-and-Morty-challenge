import { useContext, createContext, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import CharacterDetailsCard from "./components/CharacterDetailsCard";
import Episodes from "./pages/Episodes";

const UpdatingCharacterContext = createContext(null);
export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

function App() {
  const [updatingCharacter, setUpdatingCharacter] = useState(null);

  return (
    <UpdatingCharacterContext.Provider
      value={{ updatingCharacter, setUpdatingCharacter }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailsCard />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
