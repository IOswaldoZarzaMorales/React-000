import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogApi from './components/DogApi'
import DogApiAsync from './components/DogApiAsync'
import DogApiAxios from './components/DogApiAxios'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
      {/* <DogApi/> */}
      {/* <DogApiAsync/> */}
      {/* <DogApiAxios/> */}
      <ItemDetailContainer/>
    </>
  )
}

export default App
