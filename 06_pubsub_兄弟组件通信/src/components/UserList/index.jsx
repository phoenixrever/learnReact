import React, {Component} from 'react';
import "./index.css";

import PubSub from "pubsub-js";

class UserList extends Component {
    state = {
        userInfo: [],
        loading: false,
        err: ""
    };

    componentDidMount() {
        //有的参数不用又不能不写,下划线占位
        this.token = PubSub.subscribe("state", (_, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {userInfo: items, loading} = this.state;
        return (
            <div className="row">
                {loading ? <div>loading</div> : items.length === 0 ? <div>hello</div> : items.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <a href={item.html_url} target="_blank" rel="noreferrer">
                                <img alt="avatar" src={item.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{item.login}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UserList;