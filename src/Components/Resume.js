import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import logo from './artihc.png';
import harshit from './harshit.png';
import srinija from './srinija.jpg';
import diksha from './diksha.jpg';
import aniket from './aniket.jpg';
import pulkit from './pulkit.jpg';
import sriram from  './sriram.jpg';
import radhika from './radhika.jpg';
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import './team.css';

class Resume extends Component {


  
  render() {

    

    return (
      <section id="resume">
        <div className="container">
        <h1 style={{fontSize:50, textAlign:'center',fontFamily:'Impact',color:'#1a1a1a'}}>Our Team</h1>
      <div className="rowresume" style={{display:'flex', flexWrap:'wrap'}}>
        
          <div className="col-md-4 col-sm-6 col-xs-12" > 
                  <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', justifyContent:'center', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Club Coordinator
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    <p className="teamname">Harshit Raj</p>
                    <img src={harshit} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/harshitraj_2203?igshid=ka4h04yzgtpc" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    <SocialIcon target="blank" url="https://www.linkedin.com/in/harshit-raj-3527511a5" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                     <SocialIcon target="blank" url="https://www.facebook.com/harshit.raj.9849912" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Event Management Head
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    Kambhampaty Srinija
                    <img src={srinija} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/sriinii._?igshid=1irczxm9psekz" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    
                     <SocialIcon target="blank" url="https://www.facebook.com/profile.php?id=100017567738518" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Event Management Head
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    Diksha Sinha
                    <img src={diksha} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/dikshasinha116?igshid=12ipqdlv4r032" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    <SocialIcon target="blank" url="https://www.linkedin.com/in/diksha-sinha-a14333192" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                     <SocialIcon target="blank" url="https://www.facebook.com/diksha.sinha.9250" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Material Procurement Head 
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    Aniket Sharma
                    <img src={aniket} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/rolyat1089?igshid=1dnuzol4uhhtl" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    
                     <SocialIcon target="blank" url="https://www.facebook.com/profile.php?id=100049135191503" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Social Media and Content Head
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    Pulkit Mahajan
                    <img src={pulkit} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/_pulkit_mhajn_?igshid=xwo22ehy1myo" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    <SocialIcon target="blank" url="https://www.linkedin.com/in/pulkit-mahajan-4026b41b3" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                     <SocialIcon target="blank" url="https://www.facebook.com/profile.php?id=100010730925977" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Design Head
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    K Sri Ram Sai
                    <img src={sriram} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/insane_.mind._?igshid=1gwr130i87ssx" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    <SocialIcon target="blank" url="https://www.linkedin.com/in/sriramsai-kukudala-9a5a83176" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                     <SocialIcon target="blank" url="https://www.facebook.com/sriramsai.kukudala339" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                  </FrontSide>
                </Flippy>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12" > 
                <Flippy

                  flipOnHover={false} // default false
                  flipOnClick={true} // default false
                  flipDirection="horizontal" // horizontal or vertical
                  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                  // if you pass isFlipped prop component will be controlled component.
                  // and other props, which will go to div
                  style={{ width: 250, height:400, margin:20 }} /// these are optional style, it is not necessary
                >
                  <BackSide
                    style={{backgroundColor: '#41669d', textAlign:'center',paddingTop:180, fontSize:20, color:'white'}}
                  >
                    Sponsorship and Outreach
                  </BackSide>
                  <FrontSide
                    style={{ backgroundColor: '#41669d', textAlign:'center', fontSize:20, color:'white'}}>
                    Radhika Gupta
                    <img src={radhika} height="200" width="200" style={{marginTop:10, borderRadius:5}} />
                   <SocialIcon target="blank" url="https://instagram.com/radhikagupta2790?igshid=1tpi6m5bjd0um" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                    <SocialIcon target="blank" url="https://www.linkedin.com/in/radhika-gupta-689088114" bgColor="black" style={{ margin:10, height: 50, width: 50 }} />
                     
                  </FrontSide>
                </Flippy>
                </div>



      </div>

    


     



      

         
      </div>
   </section>
    );
  }
}

export default Resume;
