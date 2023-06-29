import React, {useContext} from 'react'
import {MainContext} from '../pages/useContext'


function ContextChild1() {
    const darkTheme = useContext(MainContext);
    const themeStyles = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
    };
  return (
    <div className='card' style={themeStyles}>
        <div className='card-body'>
            Child Comp 1
        </div>
    </div>
  )
}

export default ContextChild1