import React from 'react'
import { createContext, useState} from 'react';
import ContextChild1 from '../comp/ContextChild1';
import ContextChild2 from '../comp/ContextChild2';

export const MainContext = createContext();

function ContextParent1(){
    return(
        <div className='card bglight text-dark'>
            <div className='card-body'>
                Main comp 1
                <div className='card-body'>
                    <ContextChild1/>
                </div>
            </div>
        </div>
    );
}

function ContextParent2(){
    return(
        <div className='card bglight text-dark'>
            <div className='card-body'>
                Main comp 2
                <div className='card-body'>
                    <ContextChild2/>
                </div>
            </div>
        </div>
    );
}

function UseContext() {
    const [darkTheme,setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme((prevDarkTheme) => !prevDarkTheme)
    }
  return (
    <MainContext.Provider value={darkTheme}>
        <div className='container'>
            <div className='card'>
                <div className='card-body'>
                    <h1>UseContext Demo</h1>
                    <button className='btn btn-primary mb-2' onClick={toggleTheme}>
                        Toggle Theme
                    </button>
                    <div className='card'>
                        <div className='card-body bg-secondary text-white' >
                            container
                            <div className='card-body'>
                                <ContextParent1/>
                                <ContextParent2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainContext.Provider>
  )
}

export default UseContext
//rfce tab