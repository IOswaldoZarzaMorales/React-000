//Recordando funciones de JavaScript

function calcularCuadrado(numero){
    return numero*numero;
}

let numero =5;

let cuadrado = calcularCuadrado(numero);

console.log(`El resultado del cuadrado de ${numero} es: ${cuadrado}`);

//<---------------------------->

function pedirNombre(){
    let nombre = prompt("Ingrese su nombre")
    return nombre;
}


function saludar (nombre){
    console.log("Bienvenido: " + nombre);
    
}

let nombreSaludo = pedirNombre();

saludar(nombreSaludo);