import React, {Component} from 'react';
import TodoListItem from './../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDelete, onToggleImportant, onToggleDone}) => {
  const elements = todos.map(el => {
    const {
      id,
      ...item
    } = el;
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem
          {...item}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}/>
      </li>
    )
  })
  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default TodoList;
