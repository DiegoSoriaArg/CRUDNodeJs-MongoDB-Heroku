const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

//conexion a Base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.9hwf3.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))


//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.use(express.static(__dirname + "/public"));


// Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas',require('./router/Mascotas'));


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "404",
        descripcion : "Titulo del sitio web wey"
    });
})

app.listen(port, () => {
    console.log('servidior a su servicio en el puerto', port)
})