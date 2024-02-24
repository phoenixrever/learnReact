import React, {Component} from 'react';
import {Typography} from 'antd/lib/index';
import {Divider} from 'antd/lib/index';
import {Button, Select, Space, Row, Col} from 'antd/lib/index';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';


const {Title} = Typography;
const {Option} = Select;

class CountUI extends Component {
    state = {
        step: 1
    };

    add = () => {
        const {step} = this.state;
        this.props.increment(step*1)
    };
    minus = () => {
        const {step} = this.state;
        this.props.decrement(step*1)
    };

    handleChange = (value) => {
        this.setState({
            step: value
        })
    };
    addIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            this.add();
        }
    };
    addIfAsync = () => {
        const {step} = this.state;
        this.props.addIfAsync(step*1,500);
    };


    render() {
        console.log(this.props);
        return (
            <>
                <Row justify="center" align="center">
                    <Col span={12}>
                        <Title level={3}>COUNT: {this.props.count}</Title>
                        <Divider/>
                        <Space wrap>
                            <Select defaultValue="1" style={{width: 120}} onChange={this.handleChange}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                            <Button type="primary" shape="circle" icon={<PlusOutlined/>} onClick={this.add}/>
                            <Button type="primary" shape="circle" icon={<MinusOutlined/>} onClick={this.minus}/>
                            <Button type="primary" onClick={this.addIfOdd}>奇数才能加</Button>
                            <Button danger onClick={this.addIfAsync}>异步加</Button>
                        </Space>
                    </Col>
                </Row>
            </>
        )
    }
}

export default CountUI;