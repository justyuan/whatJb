import React from 'react';
import testQQPort from '../../store/testQQ/testQQPort';

import {Input, Button} from 'antd';

export default class TestQQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qqNum: 0,
            conclusion: '',
            analysis: ''
        };
        this.inputNum = this.inputNum.bind(this);
        this.testQQ = this.testQQ.bind(this);
    }
    inputNum(event) {
        if (event.target.value.length < 12)
            this.setState({qqNum: event.target.value});
        else
            event.target.value = event.target.value.substring(0, 11);
        }
    testQQ() {
        let _self = this;
        testQQPort.testQQ(this.state.qqNum, (data) => {
            _self.setState({conclusion: data.result.conclusion, analysis: data.result.analysis});
        });
    }
    render() {
        return (
            <div>
                <Input type="number" placeholder="input your QQ number" onChange={this.inputNum}/>
                <Button type="primary" size="large" onClick={this.testQQ}>Test it</Button>
                {this.state.conclusion.length
                    ? <p>您的QQ号：{this.state.conclusion}</p>
                    : false}
                <p>{this.state.analysis}</p>
            </div>
        );
    }
}
