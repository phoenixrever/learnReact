import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyNavLink(props) {
  
  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item active' : 'list-group-item';
  }
  return (
    <div>
      {/*NavLink 可以直接写 children 属性 相当于标签体内容  */}
      <NavLink
        // 每次点击路由  className里面的函数都会执行
        // className={({ isActive }) =>
        //   isActive ? 'list-group-item active' : 'list-group-item'
        // }
        // {...props}

        className={computedClassName}
        {...props}
      />
    </div>
  );
}
