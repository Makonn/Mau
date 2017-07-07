
import React, { Component } from 'react';
import '../styles/Outro.css';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';

/* Contact */

class Outro extends Component {
  render(){
    return(
      <div className="container-fluid" id ="MauContainerContact">
        <div id="TextContainerContact">

          <p className ="App-outro" id="Contact">Ota yhteyttä</p>
          <p className ="App-outro" id="ContactInfo">Sähköposti:</p>

          {/* Animation for email */}
          <Reveal effect="animated fadeInUp">
            <h1 className ="App-outro" id="ConctactInfoReal">petja.makkonen@hotmail.com</h1>
          </Reveal>

          <p className ="App-outro" id="ContactInfo">Puhelinnumero:</p>

          {/* Animation for phonenumber */}
          <Reveal effect="animated fadeInUp">
            <h1 className ="App-outro" id="ConctactInfoReal">040 526 5819</h1>
          </Reveal>

        </div>
      </div>
    );
  }
}

export default Outro;
