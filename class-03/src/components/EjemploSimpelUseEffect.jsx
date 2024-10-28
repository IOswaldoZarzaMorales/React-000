import { useEffect,useState } from "react";

function EjemploSimpleUseEffect(){
    const [count, setCount] =useState(0);
    const [titulo,setTitulo] =useState("");

    //Montaje del componente

    useEffect(()=>{
        console.log("Primera vez que se renderiza el componente");
    }, [])

    //Cundo se actualiza acount
    useEffect(()=>{
        console.log("Se actualizo el valor de count y titulo");
    }, [count, titulo])

    //Cuando se actualiza titulo
    useEffect(()=>{
        console.log("Se actualizo titulo");
    }, [titulo])

    //Cuando se renderiza el componente
    useEffect(() => {
        console.log("Se renderizo el componente ");
        
    })

    return(
        <>
            <h2>{titulo}</h2>
            <p>contador: {count}</p>
            <button onClick={()=>setCount(count=>count+1)}>Incrementar contador</button>
            <button onClick={()=>setTitulo("Bienvenidos a la clase 3")}>Implementar titulo</button>
        </>
    )
}

export default EjemploSimpleUseEffect