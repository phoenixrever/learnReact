import React, {Component} from 'react';
import "./index.css";

class UserList extends Component {
    render() {
        const {userInfo:items,loading} =this.props;
        return (
            <div className="row">
                {loading?<div>loading</div>:items.length===0?<div>hello</div>:items.map(item=>{
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