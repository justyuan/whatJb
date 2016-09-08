import React from 'react';

import {Input, Button} from 'antd';

export default class TestQQ extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Input placeholder="input your QQ number"/>
                <Button type="primary" size="large">Test it</Button>
            </div>
        );
    }
}
