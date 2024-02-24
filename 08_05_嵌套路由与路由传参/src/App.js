import React, {Component} from 'react';
import "./App.css"
import {Route, Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink';

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                     <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 编写路由链接 Home 标签体内容在 元素的children 属性中 属于特殊的属性*/}
                                <MyNavLink to="/home">Home</MyNavLink>
                                <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* 精准匹配 exact ={true} 可以简写成 exact 不写就是 exact = {false} */}
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/about" component={About}/>
                                    <Redirect to="/about"/>
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;