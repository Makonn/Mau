
import React, { Component } from 'react';
import '../styles/Picture.css';

/* Parallax picture */

class Picture extends Component {
  render(){
    return(
      <div className ="background">
        {this.props.children}
      </div>
    );
  }
}

export default Picture;
