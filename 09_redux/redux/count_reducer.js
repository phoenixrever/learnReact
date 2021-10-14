//初始化preState 为undefined 加了形参默认值之后为0

import {DECREMENT, INCREMENT} from "./constant";

const initState=0;

export default function countReducer(preState=initState,action) {
    //undefined {type: "@@redux/INITp.6.1.v.e.3"}   随机字符串防止和 type 名字一样
    console.log(preState,action);
    const {type,data}=action;
    switch (type) {
        case INCREMENT:
            return preState+data;
        case DECREMENT:
            return preState-data;
        default:
            return preState
    }
}
