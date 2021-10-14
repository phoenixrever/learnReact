import CountUI from '../../components/CountUI'
//引入connect 连接countUI 与 redux
import {connect} from 'react-redux'
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count-action";
import {INCREMENT,DECREMENT} from '../../redux/constant'

const mapStateToProps = state => {
    return {count: state}
};

const mapDispatchToProps = dispatch =>({
    [INCREMENT]: (data) => dispatch(createIncrementAction(data)),
    [DECREMENT]: data => dispatch(createDecrementAction(data)),
    addIfAsync:(data,time)=>dispatch(createAsyncIncrementAction(data,time))
});


//store 通过props传入  第一个参数  状态state 第二个action
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

// export default connect(store)(CountUI);
export default CountContainer;