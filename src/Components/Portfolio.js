import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import harshit from './harshit.png';
import events1 from './events1.jpg';
import events2 from './events2.jpg';
import events3 from './events3.jpg';
import events4 from './events4.jpg';
import events5 from './events5.jpg';
import events6 from './events6.jpg';
import events7 from './events7.jpg';
import events8 from './events8.jpg';
import events9 from './events9.jpg';
import events10 from './events10.jpg';
import events11 from './events11.jpg';
import events12 from './events12.jpg';



class Portfolio extends Component {
  render() {

    return (
      <section style={{backgroundColor:this.props.colorinfo}} id="portfolio">
        <Container>
          <h1 style={{fontSize:50}}>Events</h1>
          <Row xs={2} md={4} lg={6}>
            <img src={events1} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events2} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events3} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events4} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events5} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events6} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events7} height="400" width="300" style={{margin:20, borderRadius:5}} />

            <img src={events8} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events9} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events10} height="400" width="300" style={{margin:20, borderRadius:5}} />
            <img src={events11} height="400" width="300" style={{margin:20, borderRadius:5}} />

            <img src={events12} height="500" width="300" style={{margin:20, borderRadius:5}} />
           
          </Row>

          
        </Container>

      </section>
    );
  }
} 

export default Portfolio;
