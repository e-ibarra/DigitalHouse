 let autos = require ("C:\\Users\\erodr\\Documents\\DIGITALHOUSE WEB FULL STACK\\node.js proyecto\\.vscode\\playgroundTest\\prueba.js"); 


 
 let BuscarAlgo = function BuscarPatente (patente){
    autos.filter(function(variable){
        return variable.patente === patente;
    })
 }
    console.log(BuscarAlgo  ("JJK116"));
