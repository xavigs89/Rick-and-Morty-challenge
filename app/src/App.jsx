import { useContext, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CharacterDetailsCard from "./components/CharacterDetailsCard";

const UpdatingCharacterContext = createContext(null);
export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

function App() {
  const [updatingCharacter, setUpdatingCharacter] = useState(null);

  return (
    <UpdatingCharacterContext.Provider
      value={{ updatingCharacter, setUpdatingCharacter }}
    >
      <div className="min-h-screen bg-cover bg-center flex flex-col items-center space-y-4 bg-sky-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailsCard />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      </div>
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
