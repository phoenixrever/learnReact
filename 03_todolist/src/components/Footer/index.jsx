import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

  //全选checkbox的回调
	//注意这边不要写成高阶函数 onChange 没有参数 直接指定返回函数就行
  handleCheckAll = (event) => {
			const flag = event.target.checked
      this.props.checkAllTodo(flag);
  };

  //清除已完成任务的回调
  handleClearAllDone = () => {
      this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //已完成的个数　reduce 方法能传2个参数第一个是回调，第二个是统计的（pre）初始值
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
