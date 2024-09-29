import { useContext } from "react";
import EjemploContext from "./EjmploProvider";

const usePresupuesto = () => {
  return useContext(EjemploContext);
};

export default usePresupuesto;
