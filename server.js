const express = require('express')
const app = express();


const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;
//middleware
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express hsb engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'herber gomez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});