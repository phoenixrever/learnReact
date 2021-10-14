import {combineReducers} from "redux";
import countReducer from "./count"
import personReducer from "./person"

const reducers =combineReducers({
    //state{count:count ,person:person}
    count:countReducer,
    person:personReducer
});

export default reducers