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


  clickColor1=async(event)=>{
    await this.setState({color1: '#bee9e8',color2:'#62b6cb',color3:'#1b4965',color4:'#cae9ff',color5:'#5fa8d3',color6: 'cyan'})
    console.log(this.state)
  }
  clickColor2= async(event)=>{
    await this.setState({color1:'#9381ff', color2:'#b888ff',color3:'#f8f7ff',color4:'#ffeedd',color5:'#ffd8be',color6:'#eb9b3f'})
    console.log(this.state)
  }
  clickColor3=async(event)=>{
    await this.setState({color1:'#f7e9b5', color2:'#134fb0',color3:'#13175e',color4:'#f5affa',color5:'#f059b8',color6:'white'})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
      <nav id="nav-wrap" style={{backgroundColor:'black'}}>
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation" >Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about" style={{color:'rgb(108, 245, 66)'}}>About</a></li>
	         <li><a className="smoothscroll" href="https://tarun-sharma27.github.io/Arts-club/single.html" style={{color:'rgb(108, 245, 66)'}}>Gallery</a></li>
            <li><a className="smoothscroll" href="#portfolio" style={{color:'rgb(108, 245, 66)'}}>Events</a></li>
            {/* <li><a className="smoothscroll" href="#contact" style={{color:'rgb(108, 245, 66)'}}>Contact</a></li> */}
            <li><a className="smoothscroll" href="#resume" style={{color:'rgb(108, 245, 66)'}}>Team</a></li>
            <li><a className="smoothscroll" href="tel:8887528024" style={{color:'rgb(108, 245, 66)'}}><i class="fa fa-phone fa-2x" aria-hidden="true"></i></a></li>
            <li><a className="smoothscroll" href="mailto:2019uce0040@iitjammu.ac.in" style={{color:'rgb(108, 245, 66)'}}><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
            <li><button style={{height:40,  width: 40,  textAlign:'right', backgroundColor: 'blue', margin:10, borderRadius: '50%',display: 'inline-block'}} onClick={this.clickColor1}></button></li>
            <li><button style={{height:40,  width: 40,  textAlign:'right', backgroundColor: 'cyan', margin:10,  borderRadius: '50%',display: 'inline-block'}} onClick={this.clickColor2}></button> </li>
            <li><button style={{height:40,  width: 40,  textAlign:'right', backgroundColor: 'green',  margin:10, borderRadius: '50%',display: 'inline-block'}} onClick={this.clickColor3}></button></li>
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
