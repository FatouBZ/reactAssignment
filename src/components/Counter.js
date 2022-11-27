import "./counter.css"
import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);
    console.log(props)
   
    const increase = () =>{
        setCount (count + props.value)
        console.log(count)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase} className="button">+ {props.value}</button>
    </div>
  )
}

export default Counter
