import React, { Component } from 'react';
import './customers.css';
import { Redirect } from 'react-router-dom'
import {Glyphicon ,FormGroup,FormControl,ControlLabel,Button ,Image } from 'react-bootstrap';
import axios from "axios";

import Autocomplete from "./autocomplete";

class Room extends Component {
  constructor() {
    super();
      this.state = {
        user: [],
      }
    }
    componentDidMount() {
      axios.get('/bc_room').then(response => {

        if (response.data) {
          console.log(response.data)
          this.setState({user: response.data})
          console.log(this.state.user)
        } else {
          console.log("nihuya")
        }
      })
    }
functionq(){

  return (

          <form className="Form-size1">
          <h3>{this.state.user.name} </h3>
          <FormGroup className="Room-forms">
            <Glyphicon glyph="glyphicon glyphicon-user" />
            <ControlLabel>Your Name</ControlLabel>
            <FormControl
              type="text"
              defaultValue={this.state.user.name}
              required
            />

          </FormGroup>
          <FormGroup className="Room-forms">
            <Glyphicon glyph="glyphicon glyphicon-envelope" />
            <ControlLabel>Your Email</ControlLabel>
            <FormControl
              type="email"
              defaultValue={this.state.user.email}

            />
          </FormGroup>
          <FormGroup className="Room-forms">

            <Glyphicon glyph="glyphicon glyphicon-briefcase" />
            <ControlLabel>Your Status</ControlLabel>
            <FormControl
              type="text"
              value={this.state.user.status}
            />
            <Button  className="Form-btn-2">edit<Glyphicon glyph="glyphicon glyphicon-pencil" /></Button >
          </FormGroup>
          </form>

  );

}
  render() {
    return(
      <div>
      {this.functionq()}
    </div>
  )
  }
}

export default Room;
