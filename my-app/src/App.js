//此写法不是解构赋值，而是分别暴漏组件的方式
//js 和jsx 都可以不写后缀
import React, { Component } from 'react';
import Hello from './component/Hello';
import WelCome from './component/Welcome';

//将这个App组件默认暴漏给其他js文件使用，其他js 文件只要导入这个js就能使用App组件。 如 import App from './App';
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <WelCome/>
      </div>
    );
  }
}
