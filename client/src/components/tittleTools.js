import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';

class Tools extends Component {

 render() {
   return (
     <Nav pullRight>
     <NavItem eventKey="1" disabled>
      <Glyphicon glyph="glyphicon glyphicon-cutlery" />
     </NavItem>
     <NavItem eventKey="2" href="/">
      <Glyphicon glyph="glyphicon glyphicon-home" />
      HOME
     </NavItem>
     <NavItem eventKey="1" href="/room"  >
      <Glyphicon glyph="glyphicon glyphicon-user" />
      ROOM
     </NavItem>
     <NavItem eventKey="3" >
       <Glyphicon glyph="glyphicon glyphicon-plus" />ADD
     </NavItem>
     </Nav>
   );
 }
}

export default Tools;
