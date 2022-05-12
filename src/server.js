let express = require('express');
let app = express();// app que hace de servidor
let personsRoute = require('./routes/person');// se incluye el router que viene de persons

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;// definicion del puerto

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000')
});