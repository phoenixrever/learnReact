import React, {Component,createContext} from 'react';

const UsernameContext=createContext({});

class A extends Component {
    state = {username: 'shadow'};

    render() {
        return (
            <div>
                <h1>A组件</h1>
                <h4>我的用户名===>{this.state.username}</h4>
                {/* value 名字固定 */}
                <UsernameContext.Provider value={{username:this.state.username,age:18}}>
                    <B/>
                </UsernameContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>我是B</h1>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    //声明要要接收context   contextType 名字固定
    static contextType = UsernameContext;
    render() {
        console.log(this);
        return (
            <div>
                <h1>我是C</h1>
                <h4>name {this.context.username}  age {this.context.age}</h4>
                <D/>
            </div>
        );
    }
}

function D() {
    return(
        <div>
            <h1>我是函数式组件D</h1>
            <UsernameContext.Consumer>
                {
                    value=>{
                        console.log(value);
                        return (
                            <h4>我拿到了A的值 username:{value.username} age :{value.age}</h4>
                        )
                    }
                }
            </UsernameContext.Consumer>
        </div>
    )
}


export default A;