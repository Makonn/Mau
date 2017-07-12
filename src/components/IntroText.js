
import React, { Component } from 'react';
import '../styles/IntroText.css';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';


/* Introduction */

class IntroText extends Component {
  render(){
    return(
      <div className="container-fluid" id ="IntroTextContainer">

        {/* Animation for introduction text */}
        <Reveal effect="animated fadeInUp">
          <h1 id="introTextHeader">Mau</h1>
        </Reveal>

        <Reveal effect="animated fadeInUp">
          <p className ="IntroText">Mau Designs & Software erikoistuu pienyrittäjien ja yksityishenkilöiden verkkosivujen toteutukseen.<br></br><br></br>Tarvitseeko yrityksesi tai vaikka bändisi verkkosivuja? Haluaisitko oman portfoliosi kaikkien nähtäville tai onko yrityksesi verkkosivut jääneet viime vuosikymmenelle? Mau suunnittelee ja toteuttaa pienimuotoiset verkkosivut jokaisen lompakolle sopivaan hintaan.<br></br><br></br>Hintaan kuuluu valokuvaus paikan päällä, verkkosivujen suunnittelu ja toteutus sekä sivujen julkaisu. Ota yhteyttä niin jutellaan lisää.
          </p>
        </Reveal>

      </div>
    );
  }
}

export default IntroText;
