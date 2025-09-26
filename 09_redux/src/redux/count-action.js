import { DECREMENT, INCREMENT } from './constant';

//普通action 返回对象{}
//注意返回对象的写法 data => ({type: INCREMENT, data}) === data=>{return {type: INCREMENT, data} } 不能直接写{} 直接写{}会被当成函数体
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action  返回函数
//redux 加入中间件后只会执行这个函数 并不会等待他的返回值  需要我们自己再调store的dispatch方法
export const createAsyncIncrementAction = (data, time) => {
  //store调用dispatch（action） 发现action是函数的时候会传入 将 dispatch 函数 作为参数传进来
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data));
      dispatch(createIncrementAction(data));
    }, time);
  };
};
