import React, { Component } from 'react';

import '../styles/TransparentContainer.css';
import '../styles/BackgroundVideo.css';

import nature from '../videos/nature.mp4';

/* Video, video controls, transparent background and logo combined */

class StartBackground extends Component {

  constructor(props) {
    super(props)
    this.timeout
    this.state = {
      videoPlaying: true
    }
  }

  /* Set timeout to break video after 5 minutes */
  componentDidMount() {
    this.timeout = setTimeout(function() { this.setState({videoPlaying: false}); }.bind(this), 300000);
    var oskari = window.innerWidth;
    console.log(oskari);
  }

  /* Click on the screen to cut video and refresh timeout  */
  togglePlay = () => {
    this.setState({videoPlaying: !this.state.videoPlaying})
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() { this.setState({videoPlaying: false}); }.bind(this), 300000);

  }


  render() {

    if(window.innerWidth > 1365){

      let {videoPlaying} = this.state;

      return(
        <div>
          <TransparentContainer videoPlaying={videoPlaying} togglePlay={this.togglePlay} />
          <BackgroundVideo videoPlaying={videoPlaying} />
        </div>
      )
    }

    else {
      return(
        <div>
          <TransparentContainer />
          <BackgroundVideo />
        </div>
      )
    }
  }
}


/* Transparent container */

class TransparentContainer extends Component {

  render() {

    let {videoPlaying, togglePlay} = this.props

    return(

      <div className="container-fluid" id ="MauContainer" onClick={togglePlay}>
        <div id="TextContainer">
          <h1 className ="App-intro" id="Mau">Mau</h1>
          <h1 className ="App-intro" id="MauText">Designs & Software</h1>
        </div>

      </div>
    );
  }
}


/* Video */

class BackgroundVideo extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.update()
  }
  componentDidUpdate() {
    this.update()
  }
  update() {
    this.refs.video[this.props.videoPlaying ? 'play' : 'pause']()
  }

  render(){
    return(
      <div className ="fullscreen-bg">
        <video autoPlay muted loop src={nature} className="backgroundVideo" ref="video" />
      </div>
    );
  }

}


export default StartBackground;
