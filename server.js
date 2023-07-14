//const readLine = require('readline');
const archivo = require('fs');
const path = './files/eventos.txt';
const express = require('express');
const app = express();
const port = 3000;
const array = [];
// De express ocupa metodo JSON, que permite recuperar desde request los archivos JSON
app.use(express.json());
//app.use(express.text());
//req es la solicitud desde el cliente - - - res es la respuesta desde el servidor

//Cliente espera la respuesta --- Es el metodo que se usa para mostrar contenido html cuando ingreso la direccion de internet
app.get("/",(req,res)=>{
    res.send("<h1>Hola Mundo desde Método GET</h1>");
});

// POST envía informacion al servidor
app.post("/",(req,res)=>{
    //let mensaje = req.body;
    //console.log(mensaje);
    //const data = JSON.stringify(mensaje);
    array.push(req.body);
    console.log(array); 
    //archivo.appendFileSync(path, `${data}\n`);
    
    res.send("<h1>Hola Mundo desde Método POST</h1>");
});


app.listen(port,()=>{console.log("Levantando puerto 3000")});