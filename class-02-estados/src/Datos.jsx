import React from 'react'

function Datos({nombre,setNombre}) {
    return (
        <>
            <button onClick={()=>setNombre("Jair")}>Cambiar nombre a Jair</button>
            <h3>{nombre} </h3>
        </>
    )
}

export default Datos