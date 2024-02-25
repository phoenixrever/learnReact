import React, { Component } from 'react';

class Demo extends Component {
  state = {
    count: 0,
  };

  add = () => {
    //函数式state 不用从this 获取
    // const { count } = this.state;

    //具体什么情况下使用哪个参找文档
    //对象式的setState

    //下面的写法console.log输出的是老的count,因为react设置状态是异步的,相当于开启了一个新线程去更新state
    // this.setState({ count: count + 1 });
    // console.log(this.state);

    //所以第二个参数的函数中给你一个回调,这个回调里面state值已经改变好了.
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state);
    // });



    // 函数式的setState ,传的不是state对象而是一个函数 这个函数会接受你2个参数 state 和 props ,就不用自己去this获取了
    // this.setState((state,props) => { 
    //     console.log(state,props)
    //     return {count:99}
    //  })

    //简写
    this.setState((state,props) => ({count:state.count+1}))

  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>COUNT:{count}</h1>
        <button onClick={this.add}>click</button>
      </div>
    );
  }
}

export default Demo;
