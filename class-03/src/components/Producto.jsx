// import "../styles.css";

function Producto({nombre, precio, descripcion,key}){
    return(
        <div className = "card" key={key}>
            <h2>{nombre}</h2>
            <h3>{descripcion}</h3>
            <h4>{precio}</h4>
        </div>
    )
}

export default Producto;

