import React, {Component} from 'react';
import {nanoid} from "nanoid";

class Child extends Component {
    state={
        // users:[{name:'shadow'},{name:'phoenixhell'}]
        users:'abc'
    };
    render() {
        return (
            <div>
                <h1>child</h1>
                {this.state.users.map(u=><h4 key={nanoid()}>{u.name}</h4>)}
            </div>
        );
    }
}

export default Child;