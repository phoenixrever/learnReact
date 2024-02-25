import {combineReducers} from "redux";
import count from "./count"
import person from "./person"

//汇总所有reducer变为一个总的reducers
/* 
    key 会在下面取出state props的时候使用
    const mapStateToProps = state => ({count: state.count,person:state.person});

*/

// const reducers =combineReducers({
//     count:countReducer,
//     person:personReducer
// });

//将名字改成和key一样,触发简写
const reducers =combineReducers({
    count,
    person
});

export default reducers