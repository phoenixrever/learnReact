import React, {Component} from 'react';
import './App.less';
import CountContainer from "./containers/CountContainer";
import store from './redux/store'

class App extends Component {
    render() {
        return (
            <div>
               <CountContainer/>
            </div>
        );
    }
}

export default App;