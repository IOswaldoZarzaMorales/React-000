import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import React from 'react'

function ItemDetailContainer() {
    const [itemInfo,setItemInfo] = useState(null);
    const [texto,setTexto]=useState("");

    console.log("Componente renderizado");
    
    useEffect(()=> {
        fetch("https://fakestoreapi.com/products/18")
        .then(response=>{
            console.log(response);
            console.log("fetch realizado");
            
            if(!response.ok){
                throw new Error("No pudimos traer el producto")
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            setItemInfo(data)})
        .catch(error => console.error("Se complico", error))
    },[])

    return (
        <div>
            <h2>Detalle del producto</h2>
            {itemInfo && <ItemDetail item={itemInfo} />}
            <button onClick={()=>setTexto("Hola")}>Cambiar estado</button>
        </div>
    )
}

export default ItemDetailContainer