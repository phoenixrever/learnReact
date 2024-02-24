import {legacy_createStore as createStore,applyMiddleware} from "redux";
//引入汇总的reducers
import reducers from './reducers/index'
//开启redux-devtools 浏览器插件
import {composeWithDevTools} from 'redux-devtools-extension'

//引入redux-thunk让store 支持异步操作(store.dispatch 方法接收函数作为参数)
import {thunk} from 'redux-thunk';


//如果没有异步Action(就是返回值为函数的Action) 可以这样写
// const store = createStore(reducers,composeWithDevTools());

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store
