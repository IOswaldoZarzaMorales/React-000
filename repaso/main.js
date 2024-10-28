//----->Desestructuracion 

let nombres = ["Erika", "Pablo", "Jair", "Ariel"];

// let nombre1=nombres[0];
// let nombre2=nombres[1];
// let nombre3=nombres[2];
// let nombre4=nombres[3];


// let[nombre1,nombre2,nombre3,nombre4]=nombres;
// let[nombre1,,,nombre4]=nombres;


// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);

//----->Desestructurando con rest operator

let [presente, ...ausentes]=nombres;

// console.log(presente);
// console.log(ausentes);

//----->Desestructurando funciones

function estudiantes() {
    return["pablo", "Abdiel", "Ariel"]
}


let [estudiante1,estudiante2,estudiante3]=estudiantes();

// console.log(estudiante1);
// console.log(estudiante2);
// console.log(estudiante3);

//----->Desestructurando Objetos

let estudianteReact = {
    nombre: "Oswaldo",
    apellido:"Zarza",
    cursos:["JavaScript", "React"]
}


let estudianteNombre= estudianteReact.nombre;
let estudianteApellido = estudianteReact.apellido;
let estudianteCursos = estudianteReact.cursos;

// console.log(estudianteNombre);
// console.log(estudianteApellido);
// console.log(estudianteCursos);

//-----> Desestructuracion de un objeto

let{nombre,apellido,cursos} = estudianteReact;


// console.log(nombre);
// console.log(apellido);
// console.log(cursos);


//----->Desestructurar cambiando el nombre de la variable

let {nombre:nombreLoco}=estudianteReact;

console.log(nombreLoco);









