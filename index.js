//npm inint

//con Node JS
/*const http = require('http');

http.createServer((req,res) =>{
    res.end('hello world');
}).listen(3000);*/


//Con Express
const express = require('express');
const app = express();

app.get('/',(req,res) =>{//get es el metodo de peticion (request,respuesta)
    res.end('Hello world');
});
app.listen(3000, () =>{
    console.log('Server active');
});