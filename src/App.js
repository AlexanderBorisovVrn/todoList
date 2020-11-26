import React, {Component} from 'react';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import AddFormItem from './components/add-item/add-item';
import ItemStatusFilter from './components/item-status-filter/item status-filter'
import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Make coffee'),
      this.createTodoItem('Create App')
    ],
    term: '',
    filter: ''
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {todoData: newArr}
    })
  }

  itemAdd = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {todoData: newArr}
    })
  };

  toggleProperty(arr, id, prop) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [prop]: !oldItem[prop]
    }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];

  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })

  }
  search = (items, term) => {
    if (term === '') {
      return items;
    }
    return items.filter((item) => item.label.toLowerCase().indexOf(term) > -1)
  }
  onSearchChange = (term) => {
    this.setState({term})
  }
  filter(items, filter) {
    switch (filter) {
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item=>item.done);
        case 'all':
          return items;
          default:
            return items;
    }
  }
  setFilter=(filter)=>{
   this.setState((state)=>{
     return{filter}
   })
  }
  render() {
    let {todoData, term,filter} = this.state;
    let visibleItem = this.filter(this.search(todoData, term),filter)
    let doneCount = todoData.filter((el) => el.done).length;
    let todoCount = todoData.length - doneCount;
    return (
      <div className='app'>
        <AppHeader done={doneCount} todo={todoCount}/>
        <div className='d-flex w-100 h-100 mb-2' >
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter filter={this.state.filter} setFilter={this.setFilter}/>
        </div>
            <TodoList
          todos={visibleItem}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <AddFormItem itemAdd={this.itemAdd}/>
      </div>
    )
  }
}