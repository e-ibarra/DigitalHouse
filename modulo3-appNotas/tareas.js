let fs = require('fs');

let funcionesDeTareas = {
    leerJSON: function () {
        let tareasJSON = fs.readFileSync('tareas.json', 'utf-8');
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },

    // Aca va la funcion/metodo de escribirJSON
    escribirJSON: function (tareas) {
        tareas = JSON.stringify(tareas);
        fs.writeFileSync('tareas.json',tareas,'utf-8');
        return tareas;
        // Convertir el parametro en formato JSON
        // Guardar esto en tareas.json usando "writeFileSync"
    },

    guardarTarea: function (unaTarea) {
        // Recupero las tareas usando la funcion correspondiente
        let misTareas = funcionesDeTareas.leerJSON ();
        // Agrego la nueva tarea recibida como parametro
        misTareas.push(unaTarea);
        // Escribo el archivo de tareas utilizando la funcion correspondiente
        funcionesDeTareas.escribirJSON(misTareas);
    },

    leerPorEstado: function (estado) {
        // Recuperar las tareas usando la funcion corespondiente
        let tareas = funcionesDeTareas.leerJSON();
        // Utilizando el metodo de arrrays "filter" debo filtrar las tareas y retornar las tareas filtradas
        let tareasFiltradas = tareas.filter(function(acumulador){
            return tareas.estado == estado
        })
        console.log(tareasFiltradas)
    }
}

module.exports = funcionesDeTareas;