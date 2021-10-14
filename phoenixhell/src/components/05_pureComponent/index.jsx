import React, {PureComponent} from 'react';


class Parent extends PureComponent {
    state = {
        status: "loser"
    };
    rebron = () => {
        // this.setState({status: "rising form the ashes"})
        this.setState({})
    };

    //使用pureComponent 可以不写
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextState);
    //     //不能这样写 对象是不能比较的
    //     // return nextState !== this.state;
    //     return true
    // }

    render() {
        console.log("parent constructor");
        const {status} = this.state;
        return (
            <div>
                <h1>parent</h1>
                <h4 style={{color: 'red'}}>{status}</h4>
                <button onClick={this.rebron}>reborn</button>
                <Child status={status}/>
            </div>
        );
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps);
    //     return true
    // }

    render() {
        console.log("child constructor");
        return (
            <div>
                <h1>child</h1>
                <h4>{this.props.status}</h4>
            </div>
        );
    }
}


export default Parent;