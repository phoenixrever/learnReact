// 默认暴漏的情况下 import的名字可以改，当然没人改这个
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode 能帮你检查一些代码不太合理的地方 比如ref='key' 字符串 会有警告
  //简单来说就是检查我是否用了一些过时，或者不推荐的写法
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

