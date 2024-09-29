import usePresupuesto from "./useEjemplo";

function App() {
  const { ejemplo } = usePresupuesto();
  console.log(ejemplo);

  return (
    <>
      <h1>Hola</h1>
    </>
  );
}

export default App;
