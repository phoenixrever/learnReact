import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        //navlink 接收到的props {to: '/home', children: 'Home'}
        //children是标签体内容
        // console.log("navlink 接收到的props",this.props)
        return (
            <div>
                {/*NavLink 可以直接写 children 属性 相当于标签体内容  */}
                <NavLink  activeClassName="active" className="list-group-item" {...this.props} />
            </div>
        );
    }
}

export default MyNavLink;