import React from 'react'
//函数式组件借助hook 接收 params 传参
import { useParams,useSearchParams,useLocation } from 'react-router-dom';

export default function Detail() {
  //params传参接收
  // const { id, title } = useParams()  || {} //{id: '01', title: 'title'}

  //search传参接收 setSearch 更新search参数的方法 用的不多
  // const [search,setSearch]= useSearchParams()
  // const id= search.get('id')
  // const title= search.get('title')

  //location 不仅有search 属性 还能接收传过来的state ,显然这个方便点
  const location = useLocation();
  const { id, title } = location.state || {}

  return (
    <ul>
      {/* <button onClick={()=>setSearch('id=001&title=666')}>点我更新search参数</button> */}

      <li>id:{id}</li>
      <li>title:{title}</li>
      <li>content:</li>
    </ul>
  );
}

