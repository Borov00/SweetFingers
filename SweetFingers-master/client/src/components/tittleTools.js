import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';

class Tools extends Component {

 render() {
   return (
    <Nav bsStyle="tabs" activeKey="1" >
     <NavItem eventKey="2" href="/">
     <Glyphicon glyph="glyphicon glyphicon-home" />
       HOME
      </NavItem>
      <Nav pullRight>
        <NavItem eventKey="1" href="/room"  >

        </NavItem>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey="1" disabled  >
         <Glyphicon glyph="glyphicon glyphicon-arrow-right" />
       </NavItem>
    </Nav>
    <div className="menu">

    <div className="title">MENU</div>
    <ul className="nav">
      <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-cutlery"/>My recipes</a></li>
      <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-plus"/>Add recipe</a></li>

    </ul>

  </div>
    </Nav>
   );
 }
}

export default Tools;
