import React, {Component} from 'react';
// import './App.less';
import CountContainer from "./containers/Count";
import Person from './containers/Person'

class App extends Component {
    render() {
        return (
            <div>
               <CountContainer/>
                <Person/>
            </div>
        );
    }
}

export default App;