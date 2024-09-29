

function Boton({count,setCoun}) {
    
    return (
        <div className="card">
            <button onClick={() => setCoun((count) => count + 1)}>
            count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default Boton