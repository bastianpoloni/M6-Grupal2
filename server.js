const archivo = require('fs');
const path = './files/eventos.json';
const express = require('express');
const app = express();
const port = 3000;
let array = JSON.parse(archivo.readFileSync(path));
// De express ocupa metodo JSON, que permite recuperar desde request los archivos JSON
app.use(express.json());


//req es la solicitud desde el cliente - - - res es la respuesta desde el servidor

//Cliente espera la respuesta --- Es el metodo que se usa para mostrar contenido html cuando ingreso la direccion de internet
app.get("/",(req,res)=>{
    

    array = JSON.parse(archivo.readFileSync(path))
    res.json(array);
});

app.get("/:id",(req,res)=>{
    const id = req.params.id;
    res.json(array[id]);
});

// POST envía informacion al servidor
app.post("/",(req,res)=>{
    
    array.push(req.body);
    console.log(array); 
    archivo.writeFileSync(path, JSON.stringify(array));
    
    res.send("<h1>Evento agregado</h1>");
});


app.listen(port,()=>{console.log("Levantando puerto 3000")});