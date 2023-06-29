import React, {useRef, useState} from 'react'

function UseRef() {
    const [StateExample, setStateExample] = useState(0)
    const RefExample = useRef(0);

    const changeRef = () => {
        RefExample.current = RefExample.current +1;
        console.log(RefExample.current);
    }

    const changeState = () => {
        setStateExample(StateExample + 1);
    }

  return (
    <div>
        <div>
            <h3>Ref Value: {RefExample.current}</h3>
        </div>
        <div>
            <h3>State Value: {StateExample}</h3>
        </div>
        <div>
            <button className='btn btn-primary ' onClick={changeRef}>
                Add Ref
            </button>
            
            <button className='btn btn-primary' onClick={changeState}>
                Add State
            </button>
        </div>
    </div>
  )
}

export default UseRef