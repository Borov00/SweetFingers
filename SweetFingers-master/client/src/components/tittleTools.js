import React, { Component } from 'react';
import {Button, Nav,Navbar,Glyphicon ,FormGroup,FormControl} from 'react-bootstrap';
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
     <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><Glyphicon glyph="glyphicon glyphicon-home"/>Home</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>

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
    </Navbar>
   );
 }
}

export default Tools;
