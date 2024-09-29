import React, { createContext, useState } from "react";

const EjemploContext = createContext();
const EjemploProvider = ({ children }) => {
  const [ejemplo, setEjemplo] = useState("ejemplo del provider");
  const [loading, setLoading] = useState(false);
  return (
    <EjemploContext.Provider
      value={{
        ejemplo,
        setEjemplo,
      }}
    >
      {children}
    </EjemploContext.Provider>
  );
};

export { EjemploProvider };
export default EjemploContext;
