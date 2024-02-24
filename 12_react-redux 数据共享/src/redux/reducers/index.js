import {combineReducers} from "redux";
import countReducer from "./count"
import personReducer from "./person"

//汇总所有reducer变为一个总的reducers
/* 
    key 会在下面取出state props的时候使用
    const mapStateToProps = state => ({count: state.count,person:state.person});

*/
const reducers =combineReducers({
    count:countReducer,
    person:personReducer
});

export default reducers