import React, { createContext, useContext, useState } from "react";
const contextapi = createContext();
export const Context = ({ children }) => {
  const [oid, setOid] = useState("000");
  const [loader, setLoader] = useState(false);

  return (
    <contextapi.Provider value={{ loader, setLoader, oid, setOid }}>
      {children}
    </contextapi.Provider>
  );
};

export const useStateContext = () => useContext(contextapi);
