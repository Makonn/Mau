
import React, { Component } from 'react';

import TransparentContainer from './TransparentContainer.js';
import NavBar from './Navbar.js';
import IntroText from './IntroText.js';
import Picture from './Picture.js';
import AnotherIntroText from './AnotherIntroText.js'
import Outro from './Outro.js'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Navigation bar */}
        <NavBar/>

        {/* Container, video and logo */}
        <TransparentContainer/>

        {/* Introduction */}
        <IntroText/>

        {/* Parallax picture */}
        <Picture>
          <div className="container-fluid" id="pictureContainerComp"></div>
        </Picture>

        {/* Services */}
        <AnotherIntroText/>

          <Picture>
            <div className="container-fluid" id="pictureContainerLens"></div>
          </Picture>

        {/* Contact */}
        <Outro/>

      </div>
    );
  }
}


export default App;
