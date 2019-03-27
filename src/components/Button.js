import React, { Component } from 'react';
import './componentStylse/BtnStyle.css'

class Button extends Component {
  constructor(){
    super()
    this.state = {
      content: 'Загрузить список стран'
    }
  }
  render(){

    let { content } = this.state;
    const { btnContent, getData } = this.props;
    const btnClick = ()=>{
      this.setState({content: 'Загружаю...'});
      getData().then(()=>{
        this.setState({content: 'Готово!'})
      });
    }
    
    return (
        <div>
          <div  className='button btn btn-primary' onClick={btnClick.bind(this)}>
            {content}
          </div>
        </div>
      )
  }
}
export default Button;