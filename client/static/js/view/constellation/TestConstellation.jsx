import React from 'react';
import Constellation from '../../store/constellation/Constellation';

import {Select, Button, Timeline} from 'antd';

export default class TestConstellation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consName: '',
            type: '',
            showResult: false,
            consResultData: {}
        };
        this.test = this.test.bind(this);
        this.selectCon = this.selectCon.bind(this);
        this.selectType = this.selectType.bind(this);
    }
    test() {
        let _self = this;
        Constellation.test({
            consName: this.state.consName,
            type: this.state.type
        }, (data) => {
            _self.setState({consResultData: data.data, showResult: true});
        });
    }
    selectCon(value) {
        this.setState({consName: value})
    }
    selectType(value) {
        this.setState({type: value});
    }
    render() {
        return (
            <div>
                <Select showSearch style={{
                    width: 200
                }} placeholder="请选择星座" optionFilterProp="children" notFoundContent="无法找到" onChange={this.selectCon}>
                    <Option value="金牛座">金牛座</Option>
                    <Option value="双子座">双子座</Option>
                    <Option value="巨蟹座">巨蟹座</Option>
                    <Option value="狮子座">狮子座</Option>
                    <Option value="处女座">处女座</Option>
                    <Option value="天秤座">天秤座</Option>
                    <Option value="天蝎座">天蝎座</Option>
                    <Option value="射手座">射手座</Option>
                    <Option value="摩羯座">摩羯座</Option>
                    <Option value="水瓶座">水瓶座</Option>
                    <Option value="双鱼座">双鱼座</Option>
                </Select>
                <Select style={{
                    width: 200
                }} placeholder="请选择星座" optionFilterProp="children" notFoundContent="无法找到" onChange={this.selectType}>
                    <Option value="week">本周行情</Option>
                    <Option value="nextweek">下周苗头</Option>
                    <Option value="month">本月事态</Option>
                </Select>
                <Button type="primary" size="large" onClick={this.test}>测一测</Button>
                {this.state.showResult
                    ? <Timeline>
                            <Timeline.Item>{this.state.consResultData.name}</Timeline.Item>
                            <Timeline.Item>{this.state.consResultData.health}</Timeline.Item>
                            <Timeline.Item>{this.state.consResultData.money}</Timeline.Item>
                            <Timeline.Item>{this.state.consResultData.love}</Timeline.Item>
                            <Timeline.Item>{this.state.consResultData.work}</Timeline.Item>
                        </Timeline>
                    : false
}
            </div>
        )
    }
}
