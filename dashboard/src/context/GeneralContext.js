import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GeneralContext.Provider value={{ user, setUser }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;