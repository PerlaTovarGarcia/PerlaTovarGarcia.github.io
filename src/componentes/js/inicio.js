import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import logo from '../img/meketrefe.png';
import click from '../img/click1.png';
import '../css/inicio.css'


class Inicio extends Component {
  constructor(props) {
      super(props);
    };
  render() {
    return (
      <div>
      <div className='contimg'>
      <img  className='img1'src={logo}/>
      </div>
      <h1 className='h1'>Perla Tovar Garcia</h1>
      <h2 className='h2'>Fron-end developer</h2>
      <img className='img2' src={click}/>
    </div>
    )
  }
}

export default Inicio;
