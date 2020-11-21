import React, {Component} from 'react';
import './add-item.css';

export default class AddFormItem extends Component {

  state = {
    label: ''
  }
  itemAdd = this.props.itemAdd;
  onLabelChange = (ev) => {
    this.setState({label: ev.target.value})
  }

  onSubmith = (ev)=>{
    ev.preventDefault();
    this.props.itemAdd(this.state.label);
    this.setState({label:''})
  }
  render() {
    return (
      <form className="add-item " onSubmit = {this.onSubmith} >
        <input
          type="text"
          className="add-item-form form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done??"
          value={this.state.label}/>
        <button className='btn btn-outline-dark'>Add item</button>
      </form>
    )
  }
}
