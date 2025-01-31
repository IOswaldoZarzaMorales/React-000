import React from 'react'
import { useState } from 'react'
import axios from "axios";

function DogApiAxios() {
    const [dogImageUrl,setDogImageUrl]=useState("");

    const fetchDogImage=async() => {
        try{
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");
            console.log(response);
            setDogImageUrl(response.data.message);
        }
        catch(error){
            console.error("Se complico errror");
            
        }
    }
    return (
        <div>
            <h1>Imagen de perro aleatoria</h1>
            <button onClick={fetchDogImage}>Ver perrito</button>
            {dogImageUrl && <img src={dogImageUrl}/>}
        </div>
    )
}

export default DogApiAxios