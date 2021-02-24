import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

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

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
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
    await this.setState({color1:'red', color2:'green',color3:'black',color4:'yellow',color5:'white',color6:'grey'})
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
         <div className="container" style={{margin:'auto', marginTop:50, textAlign:'center'}}>
      <div className="row" style={{color:'green', fontSize:18,  textAlign:'center', margin:10}}>
      <div className= "col-xs-4" style={{borderStyle:'solid',borderWidth:10, textAlign:'center', color:'white'}} onClick={this.clickColor1} >
      <button style={{height:40,  width: 40,  backgroundColor: 'blue',  borderRadius: '50%',display: 'inline-block'}}></button>
      </div>
      <div className= "col-xs-4" style={{borderStyle:'solid',borderWidth:10,textAlign:'center',color:'white'}} onClick={this.clickColor2} >
      <button style={{height:40,  width: 40,  backgroundColor: 'cyan',  borderRadius: '50%',display: 'inline-block'}}></button> 
      </div>
      <div className= "col-xs-4" style={{borderStyle:'solid',borderWidth:10, textAlign:'center',color:'white'}} onClick={this.clickColor3} >
      <button style={{height:40,  width: 40,  backgroundColor: 'green',  borderRadius: '50%',display: 'inline-block'}}></button> 
      </div>
      </div>
      </div>
      
        <Header colorinfo={this.state.color1} data={this.state.resumeData.main}/>
        <About colorinfo={this.state.color2} data={this.state.resumeData.main}/>
        <Resume colorinfo={this.state.color3} data={this.state.resumeData.resume}/>
        <Portfolio colorinfo={this.state.color4} data={this.state.resumeData.portfolio}/>
        <Contact colorinfo={this.state.color5} data={this.state.resumeData.main}/>
        <Footer colorinfo={this.state.color6} data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
