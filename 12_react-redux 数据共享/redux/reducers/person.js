import {ADD_PERSON} from "../constant";

const initState = [
    {username: 'shadow', password: "12345"}
];
export default function personReducer(preState = initState, action) {
    const {type,person}=action;
    switch (type) {
        case ADD_PERSON:
            //这边不能用unshift返回preState  redux比较的话只会比较preState的地址值
            //一样的就不更新
            return [person,...preState];
        default:
            return preState
    }
}