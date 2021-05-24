import React, { Component } from 'react';
import logo from './artihc.png';
import './team.css';
class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div  className="row">
         <div className="three columns">
            <img className="profile-pic"  src={logo} alt="Artihc logo" />
         </div>
         <div className="nine columns main-col">

            <h1 style={{color:'white', fontSize:50,fontFamily:'Times New Roman'}}><u><i> About us </i></u></h1>

            <p style={{color:'white',fontSize:20,fontFamily:'yellowtail'}} font>The Artihc Club is a place for practicing artists to improvise
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
