
import React, { Component } from 'react';
import '../styles/NavBar.css';

import Navbar from "react-bootstrap/lib/Navbar";
import NavItem from "react-bootstrap/lib/NavItem";
import Nav from "react-bootstrap/lib/Nav";
import Scrollchor from 'react-scrollchor';

/* NavBar*/

class NavBar extends Component {
  render(){
    return(

      <Navbar inverse collapseOnSelect fixedTop>
         <Navbar.Header>

           {/* Left side of the navbar */}
           <Navbar.Brand>

             {/* Animated scroll to top */}
             <Scrollchor to="" className="nav-link">Mau</Scrollchor>

           </Navbar.Brand>

           <Navbar.Toggle />

        </Navbar.Header>

        <Navbar.Collapse>

          {/* Navbars right side elements */}
          <Nav pullRight>

            {/* All of the elements direct to certain part of the page with Scrollchor */}
            <NavItem eventKey={1} href="" id="color"><Scrollchor to="#IntroTextContainer" className="nav-link">Yritys</Scrollchor></NavItem>
            <NavItem eventKey={2} href="" id="color"><Scrollchor to="#AnotherIntroTextContainer" className="nav-link">Palvelut</Scrollchor></NavItem>
            <NavItem eventKey={3} href="" id="colorLast"><Scrollchor to="#MauContainerContact" className="nav-link">Ota yhteyttä</Scrollchor></NavItem>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
