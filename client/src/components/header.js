import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';

class Headers extends Component {

 render() {
   return (
     <header className="Head-text">

         <Nav bsStyle="tabs" activeKey="1" >
           <NavItem eventKey="1" disabled>
            <Glyphicon glyph="glyphicon glyphicon-cutlery" />
           </NavItem>

           <NavItem eventKey="2" href="/">
            <Glyphicon glyph="glyphicon glyphicon-home" />
            HOME
           </NavItem>
           <NavItem eventKey="3" >
             <Glyphicon glyph="glyphicon glyphicon-plus" />
             ADD
           </NavItem>

          <Nav pullRight>
            <NavItem eventKey="1" href="/room"  >
              <Glyphicon glyph="glyphicon glyphicon-user" />
              ROOM
            </NavItem>
         </Nav>
         <Nav pullRight>
          <NavItem eventKey="1" href="/room"  >
            <Glyphicon glyph="glyphicon glyphicon-pencil" />
            SIGN UP/LOG IN
          </NavItem>
        </Nav>
         </Nav>


     </header>
   );
 }
}

export default Headers;
