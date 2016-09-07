const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    }

    console.log(`server is listening on ${port}...`)
})
