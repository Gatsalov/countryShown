import React, { Component } from 'react';

class Country extends Component{
  constructor(){
    super();
    this.props;
    this.state = {
      showFlag: false
    }
  }
  showList(){
    this.setState({showFlag: !this.state.showFlag})
  }
  render(){
    const { name, capital, flag, area} = this.props.obj;
    const { showFlag } = this.state;
    
    return (
        <div className='card card-body mb-3'>
          <h4>{name} <i className="fas fa-sort-down right" onClick={this.showList.bind(this)}></i> </h4>
          {showFlag ?
            <ul className='list-group'>
              <li className='list-group-item'>Столица: <strong> {capital}</strong></li>
              <li className='list-group-item'>Пдощадь : {area} кв/км</li>
              <li className='list-group-item'><a href={flag}>Государственный флаг</a></li>
            </ul> : null
          }
          
        </div>
      )
  }
}

export default Country;