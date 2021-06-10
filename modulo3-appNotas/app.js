let funcionesDeTareas = require('./tareas');

// Como obtener los argumentos de la terminal
let argumento = process.argv[2];
//console.log(process.argv); // Como ver lo que me llega en la terminal

switch (argumento) {
    case 'listar':
       let tareas = funcionesDeTareas.leerJSON(); //Me devuelve una collecion (array) con todas las tareas
        // for (let i = 0; i < tareas.length; i++) {
        //    console.log(i+1 + '. La tarea ' + tareas[i].titulo+ ' se encuentra ' + tareas[i].estado) ;
        // }
        
        // Alternativa con forEach()
        tareas.forEach((unaTarea, indice) => {
            console.log(indice+1 + '. La tarea ' + unaTarea.titulo+ ' se encuentra ' + unaTarea.estado)
        });
        break;
         // Escribir el caso en que se utilice "crear"
        // Dentro del caso crear tenemos que armar un objeto literal con las propiedades "titulo" y "estado" donde titulo será lo que se escribe en la terminal y el estado será SIEMPRE "pendiente"
        // Una vez que tengo el objeto literal de la nueva tarea, utilizo la funcion correspondiente del archivo tareas.js para guardarla
    case 'crear':
         let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
         };
         funcionesDeTareas.guardarTarea(nuevaTarea)
        break;

    case undefined:
        console.log('Tienes que escribir una acción');
        break;

   
    // Escribir el caso en que se utilice "filtrar"
        // Recuperar cual es el estado que se necesita filtrar usando "process.argv[]"
        // Utilizar el metodo correspondiente para filtrar una tarea por estado
        // Una vez filtradas, recorrer la nueva colección y mostrar por consola las tareas
    case 'filtrar':
        let estado = process.argv[3];
        let leerPorEstado = funcionesDeTareas.leerPorEstado(estado);
        console.log(leerPorEstado)
    break;


    default:
        console.log('No entiendo que quieres hacer');
        break;
}



