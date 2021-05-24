import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import logo from './artihc.png';
import Typist from 'react-typist';
import './team.css'
class Header extends Component {

  render() {

    

    console.log(this.props.colorinfo)
  
    return (
      <header id="home" >
      
      


      <div className="row banner" style={{height:'auto', padding:45}}>
      
         <div className="banner-text" >
        
         <Typist cursor={{show:false}}><h1 className="responsive-headline" ></h1>  </Typist>            
            
            
            
            
           
         </div>
      </div>

     

   </header>
    );
  }
}

export default Header;
