//npm inint

//con Node JS
/*const http = require('http');

http.createServer((req,res) =>{
    res.end('hello world');
}).listen(3000);*/


//Con Express
const express = require('express');
const app = express();

//middelwares
app.use(function(req,res,next){
    console.log('request url:' + req.url);
    next();//sin la funcion next el servidos no pasa a las rutas
});


app.use( (req,res,next) =>{
    console.log('ha pasado por este servidor');
    next();
});

//rutas
    // el simbolo / es la ruta inicial
app.get('/',(req,res) =>{//get es el metodo de peticion (request,respuesta)
    res.end('Hello world');
});

app.get('/login', (req,res) =>{
    res.end('aqui va el login');
});

app.get('*' ,(req,res) =>{
    res.end('Archivo no encontrado');
});

app.listen(3000, () =>{
    console.log('Server active');
});