import React, { Component } from 'react';
import {Button, Nav,Navbar,NavItem,Glyphicon ,FormGroup, FormControl } from 'react-bootstrap';

class Headers extends Component {

 render() {
   return (
     <header >
     <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><Glyphicon glyph="glyphicon glyphicon-home"/>Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
      <NavItem eventKey="1"  href="/signUp" >
        +
        <Glyphicon glyph="glyphicon glyphicon-user" />
        SignUp
      </NavItem>
      <NavItem eventKey="1"  href="/signIn" >
        <Glyphicon glyph="glyphicon glyphicon-log-in" />
        _SignIN
      </NavItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar>



     </header>
   );
 }
}

export default Headers;
