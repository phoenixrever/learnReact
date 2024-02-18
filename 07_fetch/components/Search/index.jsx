import React, {Component} from 'react';
import PubSub from "pubsub-js";

class Search extends Component {

    //使用await 不用忘记在最近的函数加上async，还有await 只能成功的结果，不用忘记catch异常
    search = async () => {
        //连续解构赋值 + 重命名 axios 发送请求
        const {keySearch: {value: keyword}} = this;
        PubSub.publish("state",{loading:true});


        //#region
        // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(({data}) => {
        //     PubSub.publish("state",{userInfo:data.items,loading:false})
        // }).catch(error => {
        //     PubSub.publish("state",{loading:false,err:error})
        // })
        //#endregion
        /*
        //关注分离第一步只是联系看看能不能成功
        fetch("https://api.github.com/search/users?q=111")
            .then(response => {
                    console.log("联系服务器成功了");
                    return response.json()
                },
                // 中断此次请求  resolve 传值给then reject传值给error 都会传值
                // 空promise不会传值
                error => {
                    console.log(error);
                    //return new reject(); 和空的promis 都可以中断此次请求
                    //return new reject();
                    return new Promise(() => {
                    });
                }
            )
            .then(data => console.log("拿到数据", data), error => console.log("我是错误", error))

        //上面成功失败2个有点啰嗦，直接catch错误就好
        fetch("https://api.github.com/search/users?q=111")
            .then(response => {
                    console.log("联系服务器成功了");
                    return response.json()
                }
            ).then(data => console.log("拿到数据",data))
            .catch(err=>{
                    console.log(error);
            })
        */

        try {
            //.then 已经不指定失败的回调了 我们可以直接用 async 和await
            //await 拿到fetch promise 成功的结果
            const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
            //json() 返回一个promise  await 不执行完成会一直阻塞在这里
            const data = await response.json();
            PubSub.publish("state",{userInfo:data.items,loading:false});
            console.log(data);
        } catch (error) {
            console.log("请求出错",error);
            PubSub.publish("state",{loading:false,err:error})
        }

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