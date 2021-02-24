import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import logo from './artihc.png';
import Typist from 'react-typist';
class Header extends Component {

  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    console.log(this.props.colorinfo)
  
    return (
      <header style={{backgroundColor:this.props.colorinfo}} id="home" >
      
      <nav id="nav-wrap" style={{backgroundColor:'black'}}>
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation" >Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about" style={{color:'rgb(108, 245, 66)'}}>About</a></li>
	         <li><a className="smoothscroll" href="#resume" style={{color:'rgb(108, 245, 66)'}}>Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio" style={{color:'rgb(108, 245, 66)'}}>Works</a></li>
            <li><a className="smoothscroll" href="#contact" style={{color:'rgb(108, 245, 66)'}}>Contact</a></li>
         </ul>
      </nav>


      <div className="row banner" style={{height:'auto', padding:45}}>
      
         <div className="banner-text" >
        
         <Typist><h1 className="responsive-headline" >Welcome to Artihc</h1>  </Typist>        
            
            <img src={logo} height='300' width='300' />
            
            
           
         </div>
      </div>

     

   </header>
    );
  }
}

export default Header;
