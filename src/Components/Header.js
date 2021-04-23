import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import logo from './artihc.png';
import Typist from 'react-typist';
class Header extends Component {

  render() {

    

    console.log(this.props.colorinfo)
  
    return (
      <header style={{backgroundColor:this.props.colorinfo}} id="home" >
      
      


      <div className="row banner" style={{height:'auto', padding:45}}>
      
         <div className="banner-text" >
        
         <Typist cursor={{show:false}}><h1 className="responsive-headline" >Welcome to Artihc</h1>  </Typist>            
            
            <img src={logo} height='300' width='300' />
            
            
           
         </div>
      </div>

     

   </header>
    );
  }
}

export default Header;
