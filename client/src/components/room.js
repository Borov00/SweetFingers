import React, { Component } from 'react';
import './customers.css';
import {MDBInput } from 'mdbreact';
import {Glyphicon ,FormGroup,FormControl,ControlLabel,Button ,Image } from 'react-bootstrap';
import PropTypes from "prop-types";
import { render } from "react-dom";
import './customers.css';

import Autocomplete from "./autocomplete";

class Room extends Component {

  state ={
    name:"Tom",
    email:"ASDFASDF@QASDFADS.com",
    status: "user"
  }
  render() {
    return (
      <div>

            <form className="Form-size1">
            <FormGroup className="Room-form">
              <Glyphicon glyph="glyphicon glyphicon-user" />
              <ControlLabel>Your Name</ControlLabel>
              <FormControl
                type="text"
                placeholder={this.state.name}

              />

            </FormGroup>
            <FormGroup className="Room-form">
              <Glyphicon glyph="glyphicon glyphicon-envelope" />
              <ControlLabel>Your Email</ControlLabel>
              <FormControl
                type="email"
                placeholder={this.state.email}
                glyph="glyphicon glyphicon-envelope"
              />
            </FormGroup>
            <FormGroup className="Room-form">

              <Glyphicon glyph="glyphicon glyphicon-briefcase" />
              <ControlLabel>Your Status</ControlLabel>
              <FormControl
                type="text"
                placeholder={this.state.status}
              />
              <Button  className="Form-btn-2">edit<Glyphicon glyph="glyphicon glyphicon-pencil" /></Button >
            </FormGroup>
            </form>


      </div>
    );
  }
}

export default Room;
