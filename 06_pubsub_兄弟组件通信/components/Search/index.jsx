import React, {Component} from 'react';
import axios from "axios";
import PubSub from "pubsub-js";

class Search extends Component {
    search = () => {
        //连续解构赋值 + 重命名
        const {keySearch: {value: keyword}} = this;
        PubSub.publish("state",{loading:true});
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(({data}) => {
            PubSub.publish("state",{userInfo:data.items,loading:false})
        }).catch(error => {
            PubSub.publish("state",{loading:false,err:error})
        })
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>

                <div className="input-group">
                    <input type="text" ref={c => this.keySearch = c} className="form-control"
                           placeholder="enter the name you search"/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-danger" onClick={this.search}>Search</button>
                    </div>
                </div>

            </section>
        );
    }
}

export default Search;