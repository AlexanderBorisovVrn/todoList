import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className='input-group mb-3'>
    <input placeholder='Search' type='text' className='form-control mr-1'></input>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn  btn-primary active">
        <input type="radio" name="options" id="option1" checked/>
          Any
        </label>
        <label className="btn btn-outline-dark">
          <input type="radio" name="options" id="option2"/>
            Radio
          </label>
          <label className="btn btn-outline-dark">
            <input type="radio" name="options" id="option3"/>
              Radio
            </label>
          </div>
        </div>
  )
}  

export default SearchPanel;