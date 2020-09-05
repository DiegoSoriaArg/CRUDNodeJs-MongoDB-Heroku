const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico con tu hermana"});
})

app.get('/servicio', (req, res) => {
    res.render("servicio", {tituloServicio : "Esta es la pagina de servicios wey"});
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "404",
        descripcion : "Titulo del sitio web wey"
    });
})

app.listen(port, () => {
    console.log('servidior a su servicio en el puerto', port)
})