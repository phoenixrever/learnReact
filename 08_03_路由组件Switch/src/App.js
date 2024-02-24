import React, {Component} from 'react';
import "./App.css"
import {Route,BrowserRouter, Switch,Redirect,NavLink} from 'react-router-dom'
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
                                {/* 如过路径都没匹配上默认返回public 文件夹 index.html 里面的内容 会造成css样式丢失问题（因为css的路径不对）*/}
                                {/*  href="%PUBLIC_URL%/css/bootstrap.css" 用绝对路径不用Redirect也没这问题 （或者相对路径的点去蒂奥变成绝对路径） */}
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