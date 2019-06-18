import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import click from '../img/click3.png';
import '../css/presentacion.css'


export default () => (
  <div>
  <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
    <div>
      <img src="https://i.ibb.co/bJ9Zptd/bq.png" style={{width: '70%', height: '50%'}}/>
      <p className="legend">Burguer Queen</p>
    </div>
    <div>
      <img src="https://i.ibb.co/dgXsSx4/data-Lovers.png" style={{width: '90%', height: '50%' }}/>
      <p className="legend">Data Lovers</p>
    </div>
    <div>
      <img src="https://i.ibb.co/Pjty5MF/cifrar.png" style={{ width: '90%', height: '50%' }}/>
      <p className="legend">Cifrado Cesar</p>
    </div>
    <div>
      <img src="https://i.ibb.co/XJW1ffn/organa.png" style={{ width: '90%', height: '50%' }}/>
      <p className="legend">Organa</p>
    </div>
    <div>
      <img src="https://i.ibb.co/ggjKn62/tutopya.png" style={{ width: '90%', height: '50%'  }}/>
      <p className="legend">Tutopia</p>
    </div>
  </Carousel>
   <img className='img2imagenes' src={click}/>
   </div>
);
