import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './team.css';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact" style={{backgroundColor:this.props.colorinfo}}>
         
         <Container>
            

         

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
               
                  <div>
						   
						   <input type="text" defaultValue="" placeholder="Name" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>
              
                  <div>
						   
						   <input type="text" defaultValue="" placeholder="Email"  size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>
                  
                  <div>
						   
						   <input type="text" defaultValue="" placeholder="Subject" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     
                     <textarea cols="50" rows="4" defaultValue="" placeholder="Message" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit btn btn-danger">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <div className="Address">
                     
                  </div>
				   </div>

              
            </aside>
      </div>
      </Container>
   </section>
    );
  }
}

export default Contact;
