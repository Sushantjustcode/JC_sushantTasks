import {useState} from 'react'

function Button(){

    const [count, setCount] = useState(0)

    return <>
    <span className="flex flex-col justify-center align-middle">
    <button className="p-2 m-12 bg-amber-300 rounded-2xl w-20"  onClick = {()=>{
        setCount(count +1);
    }} >Click me </button>
    <p>Count: {count}</p></span>
    </>
}

export default Button;
