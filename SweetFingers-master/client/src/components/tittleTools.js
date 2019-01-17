import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';
import axios from 'axios'
class Tools extends Component {
  constructor() {
    super();
      this.state = {
        user: [],
      }
    }
    componentDidMount() {
      axios.get('/bc_room').then(response => {

        if (response.data) {

          this.setState({user: response.data})

        } else {
          console.log("nihuya")
        }
      })
    }
    functionq() {
      if(this.state.user.status==="admin") {
        return(
          <ul className="nav">
            <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-cutlery"/>My recipes</a></li>
            <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-plus"/>Add recipe</a></li>
            <li><a href="http://localhost:5000/manage"><Glyphicon glyph="glyphicon glyphicon-tasks"/>Manage</a></li>
            <li><a href="http://localhost:5000/logout"><Glyphicon glyph="glyphicon glyphicon-log-out"/>Log-Out</a></li>

          </ul>
        )
      } else {
        return(
          <ul className="nav">
            <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-cutlery"/>My recipes</a></li>
            <li><a href="#"><Glyphicon glyph="glyphicon glyphicon-plus"/>Add recipe</a></li>
            <li><a href="http://localhost:5000/logout"><Glyphicon glyph="glyphicon glyphicon-log-out"/>Log-Out</a></li>

          </ul>
        )
      }
    }
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
      {this.functionq()}
    <div className="title">MENU</div>


  </div>
    </Nav>
   );
 }
}

export default Tools;
