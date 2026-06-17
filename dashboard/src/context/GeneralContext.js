import React, { createContext, useState } from "react";
import BuyActionWindow from "../components/BuyActionWindow";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{ user, setUser, openBuyWindow, closeBuyWindow }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;