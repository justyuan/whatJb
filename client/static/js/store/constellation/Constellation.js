import EventEmitter from 'events';
import request from 'superagent';

class Constellation extends EventEmitter {
    constructor(props) {
        super(props);
        this.allData = null;
    }

    test(data, callback) {
        var self = this;
        request.post('/constellation').send({
            consName: data.consName,
            type: data.type
        }).end((err, res) => {
            self.allData = JSON.parse(res.text);
            callback(self.allData);
        });
    }
}

export default new Constellation();
