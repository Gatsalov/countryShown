import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import Button from './Button'
import Country from './Country'
import'../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class FormConstructor extends Component {
  constructor(){
    super();
    this.state = {
      arr: []
    };
  }
  loadData(){
    const arr = [];
   return axios('https://restcountries.eu/rest/v2/all')
      .then((response)=>{
        return response.data
      })
      .then((data)=>{
        for(let key in data){
          arr.push(data[key])
        }
        this.setState({arr:arr});
        console.log(this.state);
      })
      .catch((response)=>{
        console.error('Network is unrichible: '+ response.status)
      });
  }
 
  render() {
    const { arr } = this.state
    return (
      <div>
        <Header branding=''/>
        <Button getData={this.loadData.bind(this)} btnContent='Загружаю...'/>
        <div className="container">
          {arr.length ? arr.map((obj, index)=> <Country key={index} obj={obj}/>) : null}
        </div>
      </div>
    );
  }
}

export default FormConstructor;

