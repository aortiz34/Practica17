let express = require('express');//inyeccion del paquete express
let router = express.Router();// instanciacion del router

// Esta es la primera ruta y será para comprobar que el ruteo funciona mandando un simple mensaje
router.get('/person', (req,res) => {
    res.send('has solicitado el listado de personas')
});

module.exports= router;