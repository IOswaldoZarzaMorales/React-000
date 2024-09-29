// import React from 'react'

function Datos({nombre,setNombre}) {
    return (
        <div>
            <button onClick={()=>setNombre("Oswaldo")}>Cambiar nombre a Oswaldo</button>
            <h1>{nombre}</h1>
        </div>
    )
}

export default Datos