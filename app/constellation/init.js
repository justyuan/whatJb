const rp = require('request-promise');

function initConstellation(app) {
    app.get('/constellation', (request, response) => {
        response.render('constellation/constellation');
    })

    app.post('/constellation', (request, response) => {
        const consName = request.body.consName,
            type = request.body.type;
        console.log(consName + type)
        rp({
            method: 'GET',
            uri: 'http://web.juhe.cn:8080/constellation/getAll',
            qs: {
                key: '27e8bd5da7f1a548646b82312cc6fe8c',
                consName: consName,
                type: type
            },
            json: true
        }).then((data) => {
            console.log(data.resultcode)
            response.render('constellation/constellation', {
                consName: consName,
                type: type,
                data: data
            })
        })
    })
}

module.exports = initConstellation
