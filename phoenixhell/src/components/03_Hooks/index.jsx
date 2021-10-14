import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from "react-dom";


//每次render 都会调用HooksDemo
function HooksDemo(props) {

    const inputRef=useRef();

    //useState返回一个数组  用数组去解构赋值
    //每次重新调用不会重新初始化count
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);

    // componentDidMount componentDidUpdate componentWillUnmount
    //第二个参数检测数据改变
    // 没有监测所有   []谁也不检测 只在初始化调用
    //也可以监测指定数据 入[count]
    //一般在这初始化获取数据 异步操作
    useEffect(()=>{
        //注意 这边必须用这种写法
        const timer = setInterval(()=>setCount(count=>count+1),500);
        // 返回的函数就是 componentWillUnmount
        return ()=>{

            clearInterval(timer);
        }
    },[]);


    function add() {
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