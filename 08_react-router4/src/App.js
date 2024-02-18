import React, {Component} from 'react';
import "./App.css"
import {Route,BrowserRouter, Switch,Redirect} from 'react-router-dom'
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
                        <BrowserRouter>
                        <Header/>
                        </BrowserRouter>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <BrowserRouter>
                                <MyNavLink to="/home">Home</MyNavLink>
                                <MyNavLink to="/about">About</MyNavLink>
                            </BrowserRouter>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*匹配到了路由就不往下找了    exact  精准匹配  路径必须一模一样*/}
                                {/* <Switch>
                                    <Route path="/home"   component={Home}/>
                                    <Route path="/about"  component={About}/>
                                    <Redirect to="/about"/>
                                </Switch> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;