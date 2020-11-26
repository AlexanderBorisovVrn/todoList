import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (ev) => {
    let term = ev.target.value
    this.setState({term})
    this
      .props
      .onSearchChange(term);
  }

  render() {
    let {term} = this.state;
    return (
      <div className='input-group'>
        <input
          placeholder='Search'
          type='text'
          className='form-control mr-1'
          onChange={this.onSearchChange}
          value={term}></input>
      </div>
    )
  }
}
