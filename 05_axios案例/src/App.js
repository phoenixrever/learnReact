import React, {Component} from 'react';
import "./App.css"
import Search from './components/Search'
import UserList from './components/UserList'

class App extends Component {
    state = {
        userInfo: [],
        loading:false,
        err:""
    };
    setData = (state) => {
        this.setState(state)
    };

    render() {
        return (
            <div className="container">
                <Search setData={this.setData}/>
                <UserList {...this.state}/>
            </div>
        )
    }
}

export default App;