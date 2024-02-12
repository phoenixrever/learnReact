//此写法不是解构赋值，而是分别暴漏组件的方式
//js 和jsx 都可以不写后缀
import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';

//将这个App组件默认暴漏给其他js文件使用，其他js 文件只要导入这个js就能使用App组件。 如 import App from './App';
export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: nanoid(), name: 'eat', done: true },
      { id: nanoid(), name: 'sleep', done: false },
      { id: nanoid(), name: 'fat', done: true },
    ],
  };

  //push 方法会直接修改原始数组，并且返回的是修改后的数组的长度，而不是一个新的数组
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  //还是那句话，不能直接修改state里面的数组
  updateTodo = (id, done) => {
    const newTodos = this.state.todos.map((o) => {
      //这样子虽然也能实现，但是修改了原来的state 好像不太好
      // if(o.id===id)done
      //   o.done=done
      // return o

      if (o.id === id) {
        //done:done 可以简写为 done
        return { ...o, done };
      }
      return o;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (checked) => {
    const newTodos = this.state.todos.map((o) => {
      return { ...o, done: checked };
    });
    
    this.setState({
      todos: newTodos,
    });
  };

  clearAllDone = () => {
    const newTodos = this.state.todos.filter((obj) => {
      return !obj.done
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo }  clearAllDone = {this.clearAllDone}/>
      </div>
    );
  }
}
