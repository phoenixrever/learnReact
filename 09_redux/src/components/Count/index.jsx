import React, {Component} from 'react';
import {Typography} from 'antd';
import {Divider} from 'antd';
import {Button, Select, Space, Row, Col} from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import store from '../../redux/store'
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count-action";


const {Title} = Typography;
const {Option} = Select;

class Count extends Component {
    state = {
        step: 1
    };

    add = () => {
        const {step} = this.state;
        store.dispatch(createIncrementAction(step*1));
    };

    minus = () => {
        const {step} = this.state;
        store.dispatch(createDecrementAction(step*1));
    };

    handleChange = (value) => {
        this.setState({
            step: value
        })
    };
    addIfOdd = () => {
        const count = store.getState();
        if (count % 2 !== 0) {
            this.add();
        }
    };
    //异步加
    addIfAsync = () => {
        const {step}=this.state;
        store.dispatch(createAsyncIncrementAction(step*1,500));
    };


    //在jndex.js 里面写
    componentDidMount() {
        //检测redux中状态变化调用render
        store.subscribe(()=>{
            this.setState({})
        });
    }

    render() {
        return (
            <>
                <Row justify="center" align="center">
                    <Col span={12}>
                        <Title level={3}>COUNT: {store.getState()}</Title>
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

export default Count;