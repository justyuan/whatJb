const rp = require('request-promise');

function initTeamWeb(app) {
    app.get('/teamweb', (request, response) => {
        response.render('teamweb/index');
    })
}

module.exports = initTeamWeb
