let nombres = ["Oswaldo", "Ivan", "Zarza","Morales"];

// let nombre0 = nombres[0];
// let nombre1= nombres[1];
// let nombre2= nombres[2];
// let nombre3= nombres[3];

// let [nombre1, nombre2, nombre3, nombre4] = nombres;
// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);

// El array se desetreuctura por posision

// let [nombre1, , , nombre4] = nombres;
// console.log(nombre1);
// console.log(nombre4);

// let [presente, ...ausente] = nombres;
// console.log(presente);
// console.log(ausente);


//DESESTRUCTURANDO FUNCIONES


// function estudiantes() {
//     return["Pablo", "Oswaldo", "Ivan"]
// }

// let [estudiant1, estudiant2, estudiant3] = estudiantes();

// console.log(estudiant1);
// console.log(estudiant2);
// console.log(estudiant3);


//DESESTRUCTURANDO OBJETOS

let estudianteReact={
    nombre:"Oswaldo", 
    apellido: "Zarza",
    curso:["javaScript", "react"]
}


// let estudianteNombre = estudianteReact.nombre;
// let estudianteApellido = estudianteReact.appellido;
// let estudianteCurso = estudianteReact.curso;

// console.log(estudianteNombre);
// console.log(estudianteApellido);
// console.log(estudianteCurso);


// let{nombre,apellido,curso} = estudianteReact;

// console.log(nombre);
// console.log(apellido);
// console.log(curso);

let {nombre, ...loDemas}=estudianteReact;

console.log(estudianteReact);
console.log(nombre);

//Desestructurar cambiando el nombre de una variable

let{nombre:nombreLoco, apellido:apellidoLoco}=estudianteReact;

console.log(nombreLoco);
console.log(apellidoLoco);





