import React, { Component } from 'react';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';
import axios from "axios"
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
          <li><a href="http://localhost:5000/manage"><Glyphicon glyph="glyphicon glyphicon-tasks"/>Manage</a></li>
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

    <div className="title">MENU</div>
    <ul className="nav">
      <li><a href="/room"><Glyphicon glyph="glyphicon glyphicon-user"/>My room</a></li>
      <li><a href="/myArticles"><Glyphicon glyph="glyphicon glyphicon-cutlery"/>My recipes</a></li>
      <li><a href="/addArticle"><Glyphicon glyph="glyphicon glyphicon-plus"/>Add recipe</a></li>
      {this.functionq()}
      <li><a href="http://localhost:5000/logout"><Glyphicon glyph="glyphicon glyphicon-log-out"/>Log-Out</a></li>
    </ul>

  </div>
    </Nav>
   );
 }
}

export default Tools;
