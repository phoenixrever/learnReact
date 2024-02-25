import React, {Component,lazy,Suspense} from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom'

//路由组件的懒加载
const  Home=lazy(()=>import("../Home"));
const  About=lazy(()=>import("../About"));

class Demo extends Component {
    render() {
        return (
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <hr/>
                <Suspense fallback={<div>loading</div>}>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        {/*<Redirect to="/about"/>*/}
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default Demo;