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
