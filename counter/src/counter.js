import { useState } from "react"

function Counter() {
    const[count, setCount] = useState(0);
    
    return (
            <div>
            <h2>Count: {count}</h2>
            <button className="btn" onClick = {() => setCount(count + 1)}>Increment</button>
            <button className="btn" onClick = {() => setCount(count - 1)}>Decrement</button>
            <button className="reset" onClick = {() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;

//useState - hook
//add state - data that changes over time
//class - stateful,functional - stateless
//hooks - special functions that let us hook into react features