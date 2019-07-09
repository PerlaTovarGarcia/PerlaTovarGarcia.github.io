import React from 'react'
import '../css/parallax.css'
import Inicio from'../js/inicio'
import Presentacion from'../js/presentacion'
import Trabajos from'../js/trabajos'
import Carousel from '../js/imagenes';
import globos from '../img/globos.png';
import  cerebro from '../img/01.png';
import '../css/presentacion.css'
const { Parallax } = require('react-spring/renderprops-addons.cjs');
const { ParallaxLayer } = require('react-spring/renderprops-addons.cjs');



class ParallaxTemplate extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#004D47' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#128277' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#52968b' }} />

        <ParallaxLayer offset={0} speed={0.3} style={{ pointerEvents: 'none' }}>
        <Inicio/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={3} style={{ pointerEvents: 'none' }}>
        <Presentacion/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.2} style={{ pointerEvents: 'none' }}>
        <img src={globos} style={{ display: 'block'}} className="imagenGlobos"/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>

        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
        <Carousel/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>

        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>

        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>

        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <img src={cerebro} style={{ display: 'block', width: '25%'}} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',

          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(3)}>

        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>

        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default ParallaxTemplate;
