import React, { Component } from 'react'
import { Link ,Route} from 'react-router-dom'
import Detail from './Detail'

export default class News extends Component {
  state={
    msg:[
      {id:'01',title:'title1'},
      {id:'02',title:'title2'},
      {id:'03',title:'title3'},
    ]
  }
  replaceShow=(id,title)=>{
    return (event)=>{
      //携带params参数
      // this.props.history.replace(`/home/news/detail/${id}/${title}`)

      //携带search参数
      // this.props.history.replace(`/home/news/detail?id=${id}&title=${title}`)

      //携带state参数
      this.props.history.replace('/home/news/detail',{id:id,title:title})


    }
  }

  pushShow=(id,title)=>{
    //携带params参数
    // this.props.history.push(`/home/news/detail/${id}/${title}`)

    //携带search参数
    // this.props.history.push(`/home/news/detail?id=${id}&title=${title}`)

    //携带state参数
    this.props.history.push('/home/news/detail',{id:id,title:title})

  }

  render() {
    return (
      <div>
      <ul className="list-group">
      {
        this.state.msg.map(({id,title}) => { 
          // 通过路径向路由组件传递params参数
          // return (
          //   <li className="list-group-item" key={id} >
          //       <a className="list-group-item" to={`/home/news/detail/${id}/${title}`}>{title}</a>
          //       <button type="button" className="btn btn-success" onClick={()=>this.pushShow(id,title)}>Success</button>
          //       <button type="button" className="btn btn-danger" onClick={this.replaceShow(id,title)}>Danger</button>
          // </li>
          // )

          //向路由组件传递search参数
          // return (
          //   <li className="list-group-item" key={id} >
          //       <span key={id} className="list-group-item" to={`/home/news/detail?id=${id}&title=${title}`}>{title}</span>
          //       <button type="button" className="btn btn-success" onClick={()=>this.pushShow(id,title)}>Success</button>
          //       <button type="button" className="btn btn-danger" onClick={this.replaceShow(id,title)}>Danger</button>
          // </li>
          // )

          //向路由组件传递state参数 to 要写对象W
          return (
            <li className="list-group-item" key={id} >
                <Link key={id} className="list-group-item" to={{pathname:'/home/news/detail', state:{id:id,title}}}>{title}</Link>
                <button type="button" className="btn btn-success" onClick={()=>this.pushShow(id,title)}>Success</button>
                <button type="button" className="btn btn-danger" onClick={this.replaceShow(id,title)}>Danger</button>
          </li>
          )
         })
      }
      </ul>
      <hr />
      {/* 只有一个路由不用switch */}
      {/* 声明一下需要接收路径传的params参数 */}
      {/* <Route path="/home/news/detail/:id/:title" component={Detail}/> */}

      {/* 传递search参数无需声明接受，自动在location的search属性中 */}
      {/* <Route path="/home/news/detail" component={Detail}/> */}

      {/* 传递search参数无需声明接受 */}
      <Route path="/home/news/detail" component={Detail}/>
      </div>
    )
  }
}