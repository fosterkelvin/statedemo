import React from 'react'
import {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);

    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
            <h1 style={{fontSize: 20+count}}> Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter
