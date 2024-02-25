import React, { useState } from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';

export default function News() {
  const [msg, setMsg] = useState([
    { id: '01', title: 'title1' },
    { id: '02', title: 'title2' },
    { id: '03', title: 'title3' },
  ]);

  const navigate  = useNavigate()


  function replaceShow(id, title) {
      //携带params参数
      // navigate(`/home/news/detail/${id}/${title}`)

      //携带search参数
      // navigate(`detail?id=${id}&title=${title}`)

      //携带state参数
      console.log("first")
      navigate('detail', {
        replace:true,
        state:{ id: id, title: title }
      });
  }

  function pushShow(id, title) {
    console.log("first",id,title)
    //携带params参数
    // navigate(`detail/${id}/${title}`)

    //携带search参数
    // navigate(`detail?id=${id}&title=${title}`)

    //携带state参数
    navigate('detail', {
      replace:false,
      state:{ id: id, title: title }
    });
  }

  return (
    <div>
      <ul className="list-group">
        {msg.map(({ id, title }) => {
          // 通过路径向路由组件传递params参数
          // return (
          //   <li className="list-group-item" key={id} >
          //       {/* <a className="list-group-item" to={`/home/news/detail/${id}/${title}`}>{title}</a> */}
          //       <Link className="list-group-item" to={`detail/${id}/${title}`}>{title}</Link>
          //       <button type="button" className="btn btn-success" onClick={()=>pushShow(id,title)}>Success</button>
          //       <button type="button" className="btn btn-danger" onClick={()=>replaceShow(id,title)}>Danger</button>
          // </li>
          // )

          //向路由组件传递search参数
          // return (
          //   <li className="list-group-item" key={id} >
          //       <Link key={id} className="list-group-item" to={`detail?id=${id}&title=${title}`}>{title}</Link>
          //       <button type="button" className="btn btn-success" onClick={()=>this.pushShow(id,title)}>Success</button>
          //       <button type="button" className="btn btn-danger" onClick={()=>replaceShow(id,title)}>Danger</button>
          // </li>
          // )
       
          // 向路由组件传递state参数 to 要写对象W
           return (
            <li className="list-group-item" key={id} >
                <Link key={id} className="list-group-item" to='detail' state={{id: id, title}}>{title}</Link>
                <button type="button" className="btn btn-success" onClick={()=>pushShow(id,title)}>Success</button>
                <button type="button" className="btn btn-danger" onClick={()=>replaceShow(id,title)}>Danger</button>
          </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
