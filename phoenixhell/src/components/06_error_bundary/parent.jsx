import React, {Component} from 'react';
import Child from "./child";

class Parent extends Component {
    state={
        hasError:'' //标识子组件是否产生错误
    };

    // 生命周期函数，一旦后台组件报错，就会触发
    //parent 自组件出现错误调用 并携带错误信息
    //只能用于打包后生产环境才不报错
    static getDerivedStateFromError(error){
        console.log("error====>",error);
        //需要返回一个state状态 react 会调用setState更新组件状态
        return {hasError: error}
    }
    componentDidCatch(error, errorInfo) {
        // 统计页面的错误。发送请求发送到后台去
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