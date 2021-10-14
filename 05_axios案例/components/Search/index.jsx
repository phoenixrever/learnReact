import React, {Component} from 'react';
import axios from "axios";


class Search extends Component {
    search = () => {
        //连续解构赋值 + 重命名
        const {keySearch: {value: keyword},props:{setData}} = this;
        // axios.interceptors.request.use(function (config) {
        //     setData({loading:true});
        //     return config
        // });
        setData({loading:true});
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(({data}) => {
            setData({userInfo:data.items,loading:false})
        }).catch(error => {
            setData({loading:false,err:error});
            console.log(error);
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