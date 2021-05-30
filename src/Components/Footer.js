import React, { Component } from 'react';
import './team.css'

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer style={{ display:'flex', justifyContent:'center'}} id="footer">

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links" style={{color:'white'}}>
              {networks}
           </ul>

           <ul className="copyright">
              <li style={{color:'white'}}>&copy; Copyright Arts Club IIT Jammu</li>
              <li style={{color:'white'}}>Designed by Tarun Sharma and Vishal Sharma</li>
           </ul>

        </div>
        
     </div>
  </footer>
    );
  }
}

export default Footer;
