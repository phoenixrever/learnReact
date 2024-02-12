import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
    getData = () => {
        //axios 返回的数据在response.data 里面
        axios.get("http://localhost:3000/api1/students").then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    };

    getPetsData = () => {
        //axios 返回的数据在response.data 里面
        axios.get("http://localhost:3000/api2/pets").then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.getData}>点我获取照片</button>
                <button onClick={this.getPetsData}>点我获取宠物</button>
            </div>
        );
    }
}

export default App;