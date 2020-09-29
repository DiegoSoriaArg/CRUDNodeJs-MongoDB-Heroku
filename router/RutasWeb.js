const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico con tu hermana"});
})

router.get('/servicio', (req, res) => {
    res.render("servicio", {tituloServicio : "Esta es la pagina de servicios wey"});
})

module.exports = router;