import React from 'react';
import './app-header.css';




const AppHeader = ({todo,done}) => {
  return(
    <div className='app-header mt-3 mb-3'>
    <h1>ToDO list</h1>
      <div className='wrap'>
      <span>{todo} more todo, {done}done</span>
      </div>
   
    </div>
    
  )
}

export default AppHeader;