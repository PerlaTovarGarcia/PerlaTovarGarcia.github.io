import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import TrabajosData from '../js/trabajosData.json';
import Carousel from '../js/imagenes';

class Trabajos extends Component {

    render(){

        return(
          <div>

        <div>
        <Carousel/>
             {TrabajosData.map((postDetail, index) =>
              <div key={index}>

                <h1>{postDetail.name}</h1>
                <h1>{postDetail.new}</h1>
              </div>


              )}
                </div>

                </div>
        )

    }
}

export default Trabajos;
