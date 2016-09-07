const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const helmet = require('helmet');
var bodyParser = require('body-parser');

app.use(helmet());

app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: path.join(__dirname),
    partialsDir: path.join(__dirname)
}));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname));

require('./home').init(app)
require('./testQQ').init(app)
require('./constellation').init(app)

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send('Your JB broke!');
})

module.exports = app
