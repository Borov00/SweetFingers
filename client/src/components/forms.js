import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon, Image,Button} from 'react-bootstrap';
import axios from 'axios';
import './customers.css';



class Forms extends React.Component {
  state = {
      email: '',
      password: ''
    }

    handleChange1 = event => {

      this.setState({ email: event.target.value });
    }
    handleChange2 = event => {

      this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost:5000/signin', { email: this.state.email, password: this.state.password, withCredentials: true })
        .then(function (res) {
            alert(res);
        })
    }
  render() {
    return (
      <div>
      <form className="Form-size1" onSubmit={this.handleSubmit} >
        <h1> Sign in </h1>
        <FormGroup>
          <Glyphicon glyph="glyphicon glyphicon-envelope" />
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            placeholder="Email"
            onChange={this.handleChange1}
          />
        </FormGroup>
        <FormGroup  >
          <Glyphicon glyph="glyphicon glyphicon-lock" />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={this.handleChange2}
          />
          <button className="Form-btn">Send</button>

        </FormGroup>

      </form>

      <form className="Form-size1">
        <h1> Sign up </h1>
        <FormGroup>
        <Glyphicon glyph="glyphicon glyphicon-user" />
        <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup
        >
        </FormGroup>
        <FormGroup>
          <Glyphicon glyph="glyphicon glyphicon-envelope" />
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Glyphicon glyph="glyphicon glyphicon-lock" />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Password"

          />
          <button className="Form-btn">Send</button>
          <br/>
          <FormGroup>
            <a href="http://localhost:5000/auth/facebook">
              <Image
                src="http://www.delgosea.eu/var/ezwebin_site/storage/images/media/images/fb-icon/7363-1-eng-GB/fb-icon.jpg"
                circle width="10%"
                heignt="10%"
              />
            </a>
            <a href="http://localhost:5000/auth/google">
              <Image
                src="https://yt3.ggpht.com/a-/AN66SAwKgKC5at8ZPnDOpe2iTpPw73EIKyNf1IPTEg=s900-mo-c-c0xffffffff-rj-k-no"
                circle width="10%"
                hieght="10%"
              />
            </a>
          </FormGroup>
          </FormGroup>

      </form>
      </div>
    );
  }
}
export default Forms ;
