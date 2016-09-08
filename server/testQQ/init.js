const rp = require('request-promise');

function initTestQQ(app) {
    app.get('/qq', (request, response) => {
        response.render('testQQ/index');
    });

    app.post('/qq', (request, response) => {
        const qq = request.body.qq;
        if (qq.length > 12) {
            response.render('testQQ/index', {
                result: {
                    conclusion: '格式不正确',
                    analysis: '请输入正确的QQ号'
                },
                qq: qq
            });
        }
        rp({
            method: 'GET',
            uri: 'http://japi.juhe.cn/qqevaluate/qq',
            qs: {
                key: '61acd0dd93ebbb2a1da397360317c194',
                qq: qq
            },
            json: true
        }).then((data) => {
            console.log(data.error_code);
            if (data.error_code === 0) {
                response.render('testQQ/index', {
                    result: data.result.data,
                    qq: qq
                });
            }
        })
    });
}

module.exports = initTestQQ
