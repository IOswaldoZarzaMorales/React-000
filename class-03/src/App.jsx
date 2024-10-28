
import './App.css'
import Productos from './components/Productos'
import Producto from './components/Producto'
import EjemploUseRef from './components/EjemploUseRef'
import EjemploSimpleUseEffect from './components/EjemploSimpelUseEffect'
import EjemploUseEffect from './components/EjemploUseEffect'
import EjemploMapYPromise from './components/EjemploMapYPromise'

function App() {

  return (
    <>
      {/* <Productos>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamon  y queso"/>
      </Productos> */}
      {/* <EjemploUseRef/> */}
      {/* <EjemploSimpleUseEffect/> */}
      {/* <EjemploUseEffect/> */}
      <EjemploMapYPromise/>

    </>
  )
}

export default App
