const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')

const app = express();

app.get('/', (req, res) => {
    res.render('index');
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

require('./server/testQQ').init(app)
require('./server/constellation').init(app)

app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});
