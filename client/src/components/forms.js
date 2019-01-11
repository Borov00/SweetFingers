import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './customers.css';

class Forms extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      text:''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 8) {
      return 'success';
    }
    else if (length > 0) {
      return 'error';
    }
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
      <form className="Form-size1">
        <h1> Log in </h1>
        <FormGroup>
          <FormControl
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <Glyphicon glyph="glyphicon glyphicon-lock" />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />

        </FormGroup>

      </form>
      <form className="Form-size1">
        <h1> Sign up </h1>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        </FormGroup>
        <FormGroup>
          <FormControl
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <Glyphicon glyph="glyphicon glyphicon-lock" />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.value}
            placeholder="Password"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
</FormGroup>

      </form>
      </div>
    );
  }
}
export default Forms ;
