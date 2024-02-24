import CountUI from '../../components/CountUI'
//引入connect 连接countUI 与 redux 
import {connect} from 'react-redux'
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count-action";
import {INCREMENT,DECREMENT} from '../../redux/constant'


//react-redux connect()() 调用的时候会给里面的函数传递state属性和 dispatch函数

//react-redux调用mapStateToProps函数的时候传入state属性
const mapStateToProps = state => ({count: state})

//react-redux调用mapDispatchToProps函数的时候传入dispatch函数
const mapDispatchToProps = dispatch =>({
    [INCREMENT]: (data) => dispatch(createIncrementAction(data)),
    [DECREMENT]: data => dispatch(createDecrementAction(data)),
    addIfAsync:(data,time)=>dispatch(createAsyncIncrementAction(data,time))
});

//mapDispatchToProps还可以精简写法 react-redux 会自动分发dispatch
const mapDispatchToProps1 = {
    [INCREMENT]: createIncrementAction,
    [DECREMENT]: createDecrementAction,
    addIfAsync:createAsyncIncrementAction
};



//注意 容器store组件必须在容器的父组件的标签属性中引入，类似props传参方式，本类中在App.js中引入


//connect第一个括号接收2个参数用来给子组件CountUI传递参数Props
//第一个参数 mapStateToProps 函数的返回对象作为props传给了UI组件（相当于在CountUI子组件里面写标签属性传props）
//第二参数 mapStateToProps 函数的返回值作为状态传给了UI组件
//简单来说就是第一个参数传数据，第二个参数传操作这个数据的方法

//connect第二个括号连接子组件CountUI
const CountContainer = connect(mapStateToProps, mapDispatchToProps1)(CountUI);

//通过connect()() 创建并暴漏一个CountContainer容器组件
export default CountContainer;