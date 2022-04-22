const express = require("express");
const path = require('path');

// Instanciar el servidor
const app = express();

// Esto permite enteneder los datos que vienen del formulario (en el servidor)
app.use(express.urlencoded({extended:false}));
// Esto le da formato Json
app.use(express.json())

// 
// Agregado por mi para subir a heroku
app.set('port' , process.env.PORT || 3000)


//

// Puedo leer la ruta
app.use(require("./routes/index"));

// Para mostrar el html desde public
app.use(express.static(path.join(__dirname, "public")));


// Se cambio el 3000 por la version que toma el servidor que te de heroku
// Correr el servidor (cambiar luego el puerto)
app.listen(app.get("port"), () =>{
    console.log(`Server on port ${app.get("port")}`)
});


// Este era el original 

// Se cambio el 3000 por la version que toma el servidor que te de heroku
// Correr el servidor (cambiar luego el puerto)
// app.listen(3000, () =>{
//     console.log("Server on port 3000")
// });