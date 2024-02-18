import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <div>
                {/*this.props里面也已经包含children 标签体内容 相当于 to = ???    children =???  */}
                <NavLink  activeClassName="active" className="list-group-item" {...this.props} />
            </div>
        );
    }
}

export default MyNavLink;