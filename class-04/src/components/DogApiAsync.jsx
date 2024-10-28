import React from 'react'
import { useState } from 'react'

function DogApiAsync() {

    const[dogImageUrl,setDogImageUrl] = useState("");

    const fetchDogImage = async () => {
        try{
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            console.log(response);
            if(!response.ok){
                throw new Error("No pudimos encontrar la imagen");
            }

            const data = await response.json();
            console.log(data);
            setDogImageUrl(data.message);
        }
        catch (error){
            console.log("Error de comunicacion",error);
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

export default DogApiAsync