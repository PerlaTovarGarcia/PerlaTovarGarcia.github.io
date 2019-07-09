import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import click from '../img/click2.png';
import '../css/presentacion.css'

class Presentacion extends Component {

  render() {
    return (
      <div>
      <h1 className='h1presentacion'>Meketrefe</h1>
      <p className='parrafo'>Frond-end developer | Animación | Modelado 3D | Audio.</p>
      <br></br>
      <p className='parrafo'>Soy una persona tenaz, comprometida y adaptable. Me gusta trabajar en equipo</p>
      <p className='parrafo'>y quiero poder trabajar en un lugar que me permita expandir mis</p>
      <p className='parrafo'>conocimientos, en un ambiente multimedia y quiero desafiar mis habilidades</p>
      <p className='parrafo'> y también aprender los proyectos que tengo que llevar a cabo.</p>
      <img className='img2presentacion' src={click}/>
    </div>
    )
  }
}

export default Presentacion;
