import React, {Component} from 'react';
import Child from "./child";

class Parent extends Component {
    state={
        hasError:'' //标识子组件是否产生错误
    };

    // 生命周期函数，一旦后台组件报错，就会触发
    //parent 子组件出现错误调用 并携带错误信息
    //只能用于打包后生产环境才不报错

    //重点 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    //render() 方法也是生命周期函数
    static getDerivedStateFromError(error){
        console.log("error====>",error);
        //需要返回一个state状态 react 会调用setState更新组件状态
        return {hasError: error}
    }

    //子组件出现错误的时候会调用这个钩子
    componentDidCatch(error, errorInfo) {
        //渲染子组件出错 一般用来 统计页面的错误。发送请求发送到后台去
        console.log(error,errorInfo);
    }


    render() {
        return (
            <div>
                <h1>parent</h1>
                {this.state.hasError?<h2>something is going wrong!</h2>:<Child/>}
            </div>
        );
    }
}

export default Parent;