
import React, { Component } from 'react';
import '../styles/AnotherIntroText.css';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';

import Programming from '../pics/Programming.png';
import Design from '../pics/Design.png';


/* Services */

class AnotherIntroText extends Component {
  render(){
    return(

      <div className="container-fluid" id ="AnotherIntroTextContainer">

        {/* Container for first of the two sub services container */}
        <div className="container-fluid" id ="DesignProgrammingContainer">

          {/* Animations for the first picture and its container */}
          <Reveal effect="animated fadeInLeft">
            <div className="DesingPictureContainer">
              <img src={Design} alt="Design" id="DesignPicture"/>
            </div>
          </Reveal>

          {/* Animations for first services text and its container */}
          <Reveal effect="animated fadeInRight">
            <div className="DesignText">
              <h1>Suunnittelu</h1>
                Mau suunnittelee verkkosivut sinun tarpeidesi mukaan. Suunnittelemme moderneja verkkosivuja jotka heijastavat sinun tai yrityksesi ilmettä. Suunnittelussa kiinnitetään huomiota sivuston ulkonäköön ja käytettävyyteen. Paikan päällä otetut  hyvälaatuiset valokuvat sivuillasi kiinnittävät potentiaalisten asiakaidesi huomion jo heidän saapuessaan sivuillesi.
            </div>
          </Reveal>

        </div>

        {/* Container for second of the two sub services container */}
        <div className="container-fluid" id ="DesignProgrammingContainer">

          {/* Animations for the second picture and its container */}
          <Reveal effect="animated fadeInLeft">
            <div className="ProgrammingPictureContainer">
              <img src={Programming} alt="Programming" id="ProgrammingPicture"/>
            </div>
          </Reveal>

          {/* Animations for second services text and its container */}
          <Reveal effect="animated fadeInRight">
            <div className="ProgrammingText">
              <h1>Toteutus</h1>
                Uudet verkkosivusi toteutetaan uusimpia teknologioita käyttäen. Tämä takaa sinulle ja sivustosi vierailijoille nopean ja responsiivisen käyttäjäkokemuksen. Sivuston toteutuksessa kiinnitetään huomiota myös hakukoneoptimointiin, jotta uusi verkkosivusi huomattaisiin jo hakukoneella hakiessa.
            </div>
          </Reveal>

        </div>

      </div>

    );
  }
}

export default AnotherIntroText;
