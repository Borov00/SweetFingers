import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';

class Headers extends Component {

 render() {
   return (
     <header className="Head-text">

         <Nav bsStyle="tabs" activeKey="1" >


           <NavItem eventKey="2" href="/">
           <Glyphicon glyph="glyphicon glyphicon-home" />
            HOME
           </NavItem>

         <Nav pullRight>
          <NavItem eventKey="1"  href="/signIn" >
            <Glyphicon glyph="glyphicon glyphicon-log-in" />
            _SignIN
          </NavItem>
        </Nav>
        <Nav pullRight>
         <NavItem eventKey="1"  href="/signUp" >
          +
          <Glyphicon glyph="glyphicon glyphicon-user" />
           SignUp
         </NavItem>
       </Nav>
         </Nav>


     </header>
   );
 }
}

export default Headers;
