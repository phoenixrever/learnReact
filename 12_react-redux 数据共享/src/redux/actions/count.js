import {DECREMENT, INCREMENT} from "../constant";
// import store from './store'

//普通action 返回对象{}
export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});
//异步action  返回函数
//redux 加入中间件后只会执行这个函数 并不会等待他的返回值  需要我们自己再调store的dispatch方法
export const createAsyncIncrementAction = (data, time) => {
    //store 回传入dispatch函数
    console.log(data);
    return (dispatch) => {
        setTimeout(() => {
            // store.dispatch(createIncrementAction(data));
            dispatch(createIncrementAction(data));
        }, time)
    }
};

