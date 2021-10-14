import React, {Component} from 'react';
import "./App.css"
import {Route, Switch,Redirect} from 'react-router-dom'
import Home from '../phoenixhell/src/components/01_lazy_load/Home'
import About from '../phoenixhell/src/components/01_lazy_load/About'
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
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*匹配到了路由就不往下找了    exact  精准匹配  路径必须一模一样*/}
                                <Switch>
                                    <Route path="/home"   component={Home}/>
                                    <Route path="/about"  component={About}/>
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