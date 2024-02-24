import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.props.history.goBack} className="btn btn-sm btn-primary ">back</button>
                <button onClick={this.props.history.goForward} className="btn btn-sm btn-success">go</button>
            </div>

        );
    }
}

export default withRouter(Header);