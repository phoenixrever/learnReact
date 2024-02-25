import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home组件内容</h2>
      {count === 2 ? <Navigate to="/about" replace /> : <h1> Count:{count}</h1>}
      <div>navigate组件只要一渲染就会引起跳转</div>
      <div>使用navigate 跳转到About</div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setCount(2)}
      >
        点我变成2
      </button>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          {/* 这边不用写父级路径 但是注意不能写 斜杆 */}
          <MyNavLink to="news">News</MyNavLink>
        </li>
        <li className="nav-item">
          <MyNavLink to="message">Message</MyNavLink>
        </li>
      </ul>
      <hr />
      {/* 指定路由组件的显示位置 */}
      <Outlet />
    </div>
  );
}
