import React, { Component } from 'react'
import axios from 'axios'
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon, Image,Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      statusReg: false,
      msg: "",
      msg2: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    //request to server to add a new email/password
    axios
        .post('/signUp', {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          confirmPassword: this.state.confirmPassword,
        })
        .then(response => {
          console.log('login response: ')
          console.log(response)
          if (response.status === 200) {
            // update App.js state

            // update the state to redirect to home
            this.setState({
              statusReg: true,
              msg: response.data.msg,
              statusReg: response.data.success
            })
            console.log("status reg:"+this.state.statusReg)
          }
        }).catch(error => {
      console.log('login error: ')
      console.log(error);

    })
    if(this.state.msg.length<1) {
      this.setState({msg2:"Incorrect email"})
    } else {
      this.setState({msg2:""})
    }
    }
  functionq(){
    if(!this.state.statusReg) {
      return(
        <form className="Form-size1">
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-user" />
              <ControlLabel>NickName</ControlLabel>
              <FormControl className="form-input"
                     placeholder="NickName"
                     type="text"
                     name="name"
                     onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-envelope" />
              <ControlLabel>Email</ControlLabel>
              <FormControl className="form-input"
                     placeholder="Email"
                     type="email"
                     name="email"

                     onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-lock" />
              <ControlLabel>Password</ControlLabel>
              <FormControl className="form-input"
                     placeholder="Password"
                     type="password"
                     name="password"

                     onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-repeat" />
              <Glyphicon glyph="glyphicon glyphicon-lock" />
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl className="form-input"
                     placeholder="Confirm Password"
                     type="password"
                     name="confirmPassword"

                     onChange={this.handleChange}
              />
              <h5 className="RED">{this.state.msg}</h5>
              </FormGroup>
          <div className="form-group ">
            <div className="col-7"></div>
            <Button
                className="Form-btn"
                onClick={this.handleSubmit}
                type="submit"
            >Sign up</Button>
          </div>
        </form>
    )

  } else {
    return(
      <form>
        <Redirect to={{pathname: "/signIn"}}/>
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

export default Signup
