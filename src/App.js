import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
//import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import ParticlesBg  from "particles-bg";
import { ParallaxProvider } from 'react-scroll-parallax';
import './Components/team.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      color1: '#bee9e8',
      color2:'#62b6cb',
      color3:'#1b4965',
      color4:'#cae9ff',
      color5:'#5fa8d3',
      color6: 'cyan'
    };

  

  }


  

  render() {
    return (
      <div className="App">
      <nav id="nav-wrap" style={{backgroundColor:'#1a1a1a'}}>
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation" >Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#home" style={{color:'#b933ff'}}>Home</a></li>
            <li><a className="smoothscroll" href="#about" style={{color:'#b933ff'}}>About</a></li>
	         <li><a className="smoothscroll" style={{color:'#b933ff'}} href="https://tarun-sharma27.github.io/Arts-club/single.html">Gallery</a></li>
            <li><a className="smoothscroll" style={{color:'#b933ff'}} href="#portfolio">Events</a></li>
            {/* <li><a className="smoothscroll" href="#contact" style={{color:'rgb(108, 245, 66)'}}>Contact</a></li> */}
            <li><a className="smoothscroll" style={{color:'#b933ff'}} href="#resume" >Team</a></li>
            <li><a className="smoothscroll" style={{color:'#b933ff'}} href="tel:8887528024"><i class="fa fa-phone fa-2x" aria-hidden="true"></i></a></li>
            <li><a className="smoothscroll" style={{color:'#b933ff'}} href="mailto:2019uce0040@iitjammu.ac.in"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
            
         </ul>
      </nav>
         
      
        <Header colorinfo={this.state.color1} />
        <About colorinfo={this.state.color2} />
        <Resume colorinfo={this.state.color3} />
        <Portfolio colorinfo={this.state.color4} />
        {/* <Contact colorinfo={this.state.color5} /> */}
        <Footer colorinfo={this.state.color6} />
      </div>
    );
  }
}

export default App;
