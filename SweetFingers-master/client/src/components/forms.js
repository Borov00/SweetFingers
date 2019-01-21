import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {FormGroup,FormControl,ControlLabel,Glyphicon, Image,Button} from 'react-bootstrap';
import './customers.css';
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      href: "",
      msg: "",
      success: false
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
      event.preventDefault();
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
            this.setState({
              success: response.data.success,
              msg: response.data.msg
            })
          }
        }).catch(error => {
      console.log('login error: ')
      console.log(error);

    })
    console.log(this.state)
  }
  functionq(){
      if(!this.state.success) {
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
                <h5 className="RED">{this.state.msg}</h5>
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
                className="Form-logo"
                src="https://static.web2ua.com/kyiv/2017/05/30/amerikanskie_sportsmeny_podderzhali_ukrai-3.png"
                circle width="13%"
                heignt="13%"
              />
            </a>
            <a href="http://localhost:5000/auth/google">
              <Image
                  className="Form-logo"
                  src="https://yt3.ggpht.com/a-/AN66SAwKgKC5at8ZPnDOpe2iTpPw73EIKyNf1IPTEg=s900-mo-c-c0xffffffff-rj-k-no"
                  circle width="13%"
                  hieght="13%"
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
