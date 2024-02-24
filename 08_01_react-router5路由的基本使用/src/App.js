import React, {Component} from 'react';
import "./App.css"
import {Route,BrowserRouter, Switch,Redirect,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

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
                            {/* 编写路由链接 */}
                            <Link className="list-group-item" to="/home">Home</Link>
                            <Link className="list-group-item" to="/about">About</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/home"   component={Home}/>
                                <Route path="/about"  component={About}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;