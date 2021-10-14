import {createStore,applyMiddleware} from "redux";
import countReducer from "./count_reducer"
//引入redux-thunk让store 支持异步操作(store.dispatch 方法接收函数作为参数)
import thunk from 'redux-thunk';

const store = createStore(countReducer,applyMiddleware(thunk));

export default store
