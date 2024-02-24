import React, {Component} from 'react';
import { Col, Divider, List, Row, Typography, Space, Button} from "antd";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {

    add = () => {
        // console.log(this.username.value);
        // console.log(this.password.value);
        this.props.addPerson({
                username: this.username.value,
                password: this.password.value
            }
        )
    };

    render() {
        const {count, person: data} = this.props;
        console.log(this.props);
        return (
            <>
                <Row justify="center" align="center">
                    <Col span={12}>
                        <Divider/>
                        <Space wrap>
                            <input ref={(c) => this.username = c}/>
                            <input ref={(c) => this.password = c}/>
                            <Button type="primary" onClick={this.add}>添加</Button>
                        </Space>
                    </Col>
                </Row>
                <Row justify="center" align="center" style={{marginTop: 20}}>
                    <Col span={12}>
                        <List
                            header={<div>COUNT: {count}</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text mark>{item.username}</Typography.Text> {item.password}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </>
        );
    }
}

//state => ({count: state.count, person: state.person} key value 名字相同可以简写
export default connect(state => ({...state}), {
    addPerson: createAddPersonAction
})(Person);