import React, { Component } from 'react';
import logo from './artihc.png';
import events1 from './events1.jpg';
import events2 from './events2.jpg';
import events3 from './events3.jpg';

import f1 from './photu/f1.jpg';
import f2 from './photu/f2.jpg';
import f3 from './photu/f3.jpg';
import f4 from './photu/f4.jpg';
import f5 from './photu/f5.jpg';
import f6 from './photu/f6.jpg';
import f7 from './photu/f7.jpg';
import f8 from './photu/f8.jpg';
import f9 from './photu/f9.jpg';
import f10 from './photu/f10.jpg';
import f11 from './photu/f11.jpg';
import f12 from './photu/f12.jpg';
import f13 from './photu/f13.jpg';
import f14 from './photu/f14.jpeg';


import './team.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class DemoCarousel extends Component {
  render() {

    

    return (
      <section id="carousel">

         
         
        <div className="container caro">
          <div className="row">
          <h1 className="headings" style={{color:'#1a1a1a', fontSize:50, alignItems:'center'}}><i> Events Gallery </i></h1>
          </div>
        <div className="row">
          <div className="four columns">
          <Carousel className="carousel">
                <div>
                    <img src= {f1} className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                <div>
                    <img src= {f2} className="round" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= {f3} className="round" />
                    <p className="legend">Legend 2</p>
                </div>
                
                
                

                
            </Carousel>  
          </div>

          <div className="four columns">
           <Carousel className="carousel">
                <div>
                    <img src= {f13}className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                
                <div>
                    <img src= {f12} className="round"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= {f14} className="round"/>
                    <p className="legend">Legend 2</p>
                </div>
                
            </Carousel>  
          </div>
          <div className="four columns">
          <Carousel className="carousel">
                <div>
                    <img src= {f8} className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                <div>
                    <img src= {f5} className="round"/>
                    <p className="legend">Legend 2</p>
                </div>
                
                <div>
                    <img src= {f4} className="round"/>
                    <p className="legend">Legend 2</p>
                </div>
                

                
            </Carousel>  
          </div>
          
        
          </div>
         
          </div>
            
            
         
      

   </section>
    );
  }
}

export default DemoCarousel;
