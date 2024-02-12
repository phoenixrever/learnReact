import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode 能帮你检查一些代码不太合理的地方 比如ref='key' 字符串 会有警告
  //简单来说就是检查我是否用了一些过时，或者不推荐的写法
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 用于记录页面性能信息非常庞大的内容不做了解 Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
