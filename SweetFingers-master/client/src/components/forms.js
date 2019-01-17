import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon, Image,Button} from 'react-bootstrap';
import './customers.css';
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      href: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.functionq=this.functionq.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
      console.log('handleSubmit')

    axios
        .post('/signIn', {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log('login response: ')
          console.log(response)
          if (response) {
          }
        }).catch(error => {
      console.log('login error: ')
      console.log(error);

    })
  }
  functionq(){
      if(!this.props.status) {
        return (
          <form className="Form-size1">
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-envelope" />
              <ControlLabel>Email</ControlLabel>
                <FormControl
                       type="email"
                       id="email"
                       name="email"
                       placeholder="Email"
                       value={this.state.email}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-lock" />
              <ControlLabel>Password</ControlLabel>
                <FormControl
                       type="password"
                       id="password"
                       name="password"
                       placeholder="Password"
                       value={this.state.password}
                       onChange={this.handleChange}
                />
                <Button

                    className="Form-btn"
                    onClick={this.handleSubmit}
                    href={this.state.href}
                    type="submit">
                    Login
                </Button>

              </FormGroup>

            <FormGroup>
            <a href="http://localhost:5000/auth/facebook">
              <Image
                  src="http://www.delgosea.eu/var/ezwebin_site/storage/images/media/images/fb-icon/7363-1-eng-GB/fb-icon.jpg"
                  circle width="65px"
                  heignt="65px"
              />
            </a>
            <a href="http://localhost:5000/auth/google">
              <Image
                  src="https://yt3.ggpht.com/a-/AN66SAwKgKC5at8ZPnDOpe2iTpPw73EIKyNf1IPTEg=s900-mo-c-c0xffffffff-rj-k-no"
                  circle width="65px"
                  hieght="65px"
              />
            </a>
          </FormGroup>
          </form>
        )
      } else {
        return(
          <form>
            <h1>Authorizated</h1>
            <Redirect to={{pathname: "/room"}}/>
          </form>
        )
      }
  }

  render() {

      return (
          <div>
          {this.functionq()}
          </div>

      )
    }

}

export default LoginForm
