import {useEffect, useState} from "react";



function EjemploUseEffect() {

    const [laps, setLaps] = useState(0);
    const [timeInSeconds, setTimeSeconds] = useState(0);

    useEffect(() =>{
        setTimeSeconds(0);

        const intervalId=setInterval(()=>{
            setTimeSeconds(time=>time+1)
        },1000);

        return ()=>{
            clearInterval(intervalId);
            console.log("Se desmonta el componente");
            
        }

    },[laps])

    useEffect(() => {
    console.log("Se actualizo time");
    
    },[timeInSeconds])

    return (
        <>
            <p>Vueltas: {laps}</p>
            <p>Tiempo en segundos: {timeInSeconds}</p>
            <button onClick={()=>setLaps(laps=>laps+1)}>Finalizar vuelta</button>
        </>
    )

}

export default EjemploUseEffect