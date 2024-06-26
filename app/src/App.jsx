import { useContext, createContext, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";

const UpdatingCharacterContext = createContext(null);
export const useUpdatingCharacter = () => useContext(UpdatingCharacterContext);

// const DetailsFormContext = createContext(null)
// export const useDetailsForm = () => useContext(DetailsFormContext)

function App() {
  const [updatingCharacter, setUpdatingCharacter] = useState(null);
  // const [detailsCharacter, setDetailsCharacter] = useState(null)

  return (
    <UpdatingCharacterContext.Provider
      value={{ updatingCharacter, setUpdatingCharacter }}
    >
      {/* <DetailsFormContext.Provider value= {{ detailsCharacter, setDetailsCharacter}}> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </DetailsFormContext.Provider> */}
    </UpdatingCharacterContext.Provider>
  );
}

export default App;
