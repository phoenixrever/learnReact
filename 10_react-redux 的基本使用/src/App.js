import React, {Component} from 'react';
import CountContainer from "./containers/CountContainer";
// import store from './redux/store'

class App extends Component {
    render() {
        return (
            <div>
               {/* 容器的store 必须从容器的父组件传入*/}
               {/* <CountContainer store={store}/> */}

               {/* 利用 Provider 给所有容器传入store */}
               <CountContainer/> 
            </div>
        );
    }
}

export default App;