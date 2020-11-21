import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onToggleImportant, onToggleDone,onDelete,done,important})=>{
  let classNames = 'todo-list-item ';
  if(done){
    classNames+='done'
  }
  if(important){
    classNames+='important'
  }
  return (
    <span className='wrapper'>
      <span className={classNames}  onClick={onToggleDone}>{label}</span>
      <div className='icon d-flex w-10'>
        <button className='icon-del btn btn-trash' onClick={onDelete}>
          <i className="fa fa-trash fa-lg redcolor" aria-hidden="true"></i>
        </button>
        <button className='icon-imp icon-del btn' onClick={onToggleImportant}>
          <i className="fa fa-exclamation fa-lg greencolor" aria-hidden="true"></i>
        </button>
      </div>
    </span>
  )
}
export default TodoListItem;
