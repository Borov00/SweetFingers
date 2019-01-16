import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';

class Tools2 extends Component {

 render() {
   return (
     <header className="Head-text">

         <Nav bsStyle="tabs" activeKey="1" >


           <NavItem eventKey="2" href="/">
           <Glyphicon glyph="glyphicon glyphicon-home" />
            HOME
           </NavItem>

         <Nav pullRight>
          <NavItem eventKey="1"  href="/room" >
            <Glyphicon glyph="glyphicon glyphicon-briefcase" />
            ROOM
          </NavItem>
        </Nav>

         </Nav>


     </header>
   );
 }
}

export default Tools2;
