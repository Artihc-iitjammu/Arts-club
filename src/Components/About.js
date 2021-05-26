import React, { Component } from 'react';
import logo from './artihc.png';
import './team.css';
class About extends Component {
  render() {

    

    return (
      <section id="about">
      <div  className="row">
      <div className="one columns main-col">
        </div>
         <div className="eleven columns main-col">

            <h1 className="headings" style={{color:'#b933ff', fontSize:50,textAlign:'left'}}><i> About us </i></h1>

            <p className="abouti">The Artihc Club is a place for practicing artists to improvise
                skills, develop techniques and collaborate with other art
                enthusiasts through group events that will beautify not only the
                college but also the community.
                Moreover it encourages artists to express their thoughts,feelings
                and creativity through visual art forms.
                'Artihc’, as the club is named, is full of these crazy people you
                will find doing all sorts of creative stuff. it is not just a club
                consisting of the most creative people in the institute, it is a
                family where you learn, teach and enjoy the art of making life
                colourful.</p>
            
         </div>
      </div>

   </section>
    );
  }
}

export default About;
