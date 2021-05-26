import React, { Component } from 'react';
import logo from './artihc.png';
import events1 from './events1.jpg';
import events2 from './events2.jpg';
import events3 from './events3.jpg';
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
                    <img src= {events1} className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                <div>
                    <img src= {events2} className="round" />
                    <p className="legend">Legend 2</p>
                </div>
                
            </Carousel>  
          </div>
          <div className="four columns">
          <Carousel className="carousel">
                <div>
                    <img src= {events1} className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                <div>
                    <img src= {events2} className="round"/>
                    <p className="legend">Legend 2</p>
                </div>
                
            </Carousel>  
          </div>
          <div className="four columns">
           <Carousel className="carousel">
                <div>
                    <img src= {events1}className="round"/>
                    <p className="legend">Rangoli making Compettiion</p>
                </div>
                <div>
                    <img src= {events2} className="round"/>
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
