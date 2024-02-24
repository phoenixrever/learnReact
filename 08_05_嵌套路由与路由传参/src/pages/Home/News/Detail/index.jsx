import React, { Component } from 'react';
import qs from 'querystringify';

export default class Detail extends Component {
  render() {
    console.log('Detail组件收到的props路由参数', this.props);
    //params传参接收
    // const {id,title}= this.props.match.params

    //search传参接收
    // const param_str = this.props.location.search
    // const params = qs.parse(param_str)
    // const {id,title}= params

    //state传参接收 注意 histoy 操作地址记录 清除缓存的话histotry 也就没有了
    const { id, title } = this.props.location.state || {}
    return (
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:</li>
      </ul>
    );
  }
}
