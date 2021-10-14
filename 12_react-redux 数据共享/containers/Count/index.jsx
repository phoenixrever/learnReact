//引入connect 连接countUI 与 redux
import {connect} from 'react-redux'
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/actions/count";
import React, {Component} from 'react';
import {List, Typography} from 'antd/lib/index';
import {Divider} from 'antd/lib/index';
import {Button, Select, Space, Row, Col} from 'antd/lib/index';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';


//================================countUI===============================
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
        this.props.addIfAsync(step,500);
    };


    render() {
        console.log(this.props);
        const {count,person}=this.props;
        return (
            <>
                <Row justify="center" align="center">
                    <Col span={12}>
                        <Title level={3}>COUNT: {count}</Title>
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
                            <Button type="danger" onClick={this.addIfAsync}>异步加</Button>
                        </Space>
                        <Divider/>
                        <List
                            dataSource={person}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text mark>item.username</Typography.Text> {item.password}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </>
        )
    }
}


//================================Count===============================

const mapStateToProps = state => {
    return {count: state.count,person:state.person}
};

//优化简写版 api 自动调用dispatch
const mapDispatchToProps ={
    increment: createIncrementAction,
    decrement:createDecrementAction,
    addIfAsync:createAsyncIncrementAction,
};
//store 通过props传入  第一个参数  状态state 第二个action
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);
// export default connect(store)(CountUI);
export default CountContainer;

