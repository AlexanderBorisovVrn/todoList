import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
  buttons = [
    {
      name: 'all',
      label: 'all'
    }, {
      name: 'active',
      label: 'active'
    }, {
      name: 'done',
      label: 'done'
    }
  ]
  

  render() {
    let {filter,setFilter}=this.props;
    const buttons = this
      .buttons
      .map(({name, label}) => {
        let isActive = filter===name;
        let clazz= isActive? 'btn-info': 'btn btn-outline-secondary';
               return (
          <button type='button' key={name} className={`btn ${clazz}`} onClick={()=>setFilter(name)}>{label}</button>
        )
      })
    return (
      <div className="btn-group btn-group-toggle">
        {buttons}
      </div>

    )
  }
}