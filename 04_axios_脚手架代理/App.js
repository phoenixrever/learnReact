import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
    getData = () => {
        axios.get("http://localhost:3000/students").then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.getData}>点我获取照片</button>
            </div>
        );
    }
}

export default App;