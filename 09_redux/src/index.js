import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
);


//diffing算法存在 只更新差异的组件 不会影响性能 新版已失效
// store.subscribe(()=>{
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App/>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// });
