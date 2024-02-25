import React, { Component } from 'react';

export default class Parent extends Component {
  render() {
    return (
      <>
        <div>Parent</div>
        {/* render 名字可以改 只是一个方法属性 */}
        <A render={(name) => <B name={name} />} />
      </>
    );
  }
}

class A extends Component {
  state = { name: 'tom' };
  render() {
    const { name } = this.state;
    return (
      <>
        <div>我是A组件</div>\{/* B 组件 */}
        {this.props.render(name)}
      </>
    );
  }
  B;
}

class B extends Component {
  render() {
    return <div>我是B组件 能接收到Props:{this.props.name}</div>;
  }
}
