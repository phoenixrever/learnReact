//https://redux.js.org/introduction/why-rtk-is-redux-today 新版 configureStore 使用

//新版用 configureStore 但是 legacy_createStore 可以用依然使用传统创建方法
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import countReducer from "./count_reducer"

//引入redux-thunk让store 支持异步操作(store.dispatch 方法接收函数作为参数)
import {thunk} from 'redux-thunk';

export default createStore(countReducer,applyMiddleware(thunk));
