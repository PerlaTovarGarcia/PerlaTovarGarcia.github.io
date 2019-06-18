import React from 'react'
import './App.css';
import ParallaxTemplate from './componentes/js/parallax'
//import Inicio from './componentes/js/inicio'
//const { Parallax } = require('react-spring/renderprops-addons.cjs');
//const { ParallaxLayer } = require('react-spring/renderprops-addons.cjs');

//const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
class App extends React.Component {
  render() {
    return (

      <div>

    <ParallaxTemplate/>
    </div>

    )
  }
}

export default App;
