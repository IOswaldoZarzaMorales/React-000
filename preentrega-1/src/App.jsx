import React from 'react'
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Card from "./components/Card/Card"
import image from "./assets/image-2.jpeg"
import image2 from "./assets/image1.jpg"
import image3 from "./assets/helado-3.jpeg"


function App() {
  

  return (
    <>
      <NavBar/>
      <div className="container">
      <ItemListContainer greeting={"Productos disponibles"} />
      </div>
      <div className="cards-container">
      <Card
        imageSrc={image}
        title="Helado de temporada"
        description="ven y disfruta de nuestro helado mas popular del momento"/>
        <Card
        imageSrc={image2}
        title="Helado de fresa"
        description="ven y disfruta de nuestro helado mas popular del momento"/>
        <Card
        imageSrc={image3}
        title="Helado de vainilla"
        description="ven y disfruta de nuestro helado mas popular del momento"/>
      </div>
      <ItemListContainer greeting = {"Helados"}/>
      <ItemListContainer greeting = {"Sabores"}/>
    </>
  )
}

export default App
