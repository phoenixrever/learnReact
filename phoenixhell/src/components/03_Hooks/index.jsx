import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from "react-dom";

//每次render 都会调用HooksDemo (1+n)次
function HooksDemo(props) {

    /*
    小知识 数组的结构赋值
        let numbers = [1, 2, 3, 4, 5];
        let [first, second, third] = numbers;

        console.log(first); // 输出: 1
        console.log(second); // 输出: 2
        console.log(third); // 输出: 3
    */

    //useState返回一个数组  用数组去解构赋值,数组元素1 变量 , 元素2 操作变量的方法
    //react 对下面做过处理 每次render重新调用,下面代码虽然会执行,但是不会重新初始化count
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);



    //useEffect相当于 componentDidMount componentDidUpdate componentWillUnmount
    //第二个参数检测哪个数据改变
    //不写监测所有数据   []谁也不检测 只在初始化调用 只会在第一次render()后执行
    //也可以监测指定数据[count]
    //一般在这初始化获取数据 异步ajax操作
    useEffect(()=>{
        //注意 这边必须用下面这种写法 setCount(count+1) 和下面是不一样的
        const timer = setInterval(()=>setCount(count=>count+1),500);
        //这样可以写返回值,默认不写, 返回的函数就是 componentWillUnmount
        return ()=>{
            // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
            clearInterval(timer);
        }
    },[]);


    const inputRef=useRef();


    function add() {
        //函数式写法 直接写对象的语法糖,接收count参数  类似setState的2种写法
        // setCount(count=>count+1);

       setCount(count+1)
    }

    function addNumber() {
        setNumber(number+1)
    }

    //卸载组件
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }

    function show() {
        // console.log(inputRef);//{current:input}
        alert(inputRef.current.value)
    }

    return (
        <div>
            <h1>Count:{count}</h1>
            <h1>Number:{number}</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={add}>count+1</button>
            <button onClick={addNumber}>number+1</button>
            <button onClick={unmount}>unmount</button>
            <button onClick={show}>show</button>
        </div>
    );
}

export default HooksDemo;