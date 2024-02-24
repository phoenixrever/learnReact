/* reducer 需要接收2个参数且有返回值 显然是一个函数 */

import {DECREMENT, INCREMENT} from "./constant";


//初始化preState 时候默认值undefined 加了形参默认值之后为0
const initState=0;

export default function countReducer(preState=initState,action) {
    //0 {type: "@@redux/INITp.6.1.v.e.3"}   随机字符串防止和 type 名字一样
    console.log(preState,action);
    const {type,data}=action;

    switch (type) {
        case INCREMENT:
            return preState+data;
        case DECREMENT:
            return preState-data;
        //初始化情况
        default:
            return preState
    }
    
}
