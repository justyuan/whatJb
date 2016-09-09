import EventEmitter from 'events';
import request from 'superagent';

class testQQPort extends EventEmitter {
    constructor(props) {
        super(props);
        this.allData = null;
    }

    testQQ(qqNum, callback) {
        var self = this;
        request.post('/qq').send({
            qq: qqNum
        }).end((err, res) => {
            self.allData = JSON.parse(res.text);
            callback(self.allData);
        });
    }
}

export default new testQQPort();
