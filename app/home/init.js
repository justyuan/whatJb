function initHome(app) {
    app.get('/', (request, response) => {
        response.render('home/home', {
            name: 'JB'
        });
    });
}

module.exports = initHome
