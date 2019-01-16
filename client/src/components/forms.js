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
      redirectTo: null
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
    console.log('handleSubmit')

    axios
        .post('/signIn', {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log('login response: ')
          console.log(response)
          if (response.status === 200) {
            // update App.js state
            this.props.updateUser({
              loggedIn: true,
              email: response.data.email
            })
            // update the state to redirect to home
            this.setState({
              redirectTo: '/'
            })
          }
        }).catch(error => {
      console.log('login error: ')
      console.log(error);

    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
          <div>
            <h4>Login</h4>
            <form className="form-horizontal">
              <div className="form-group">
                <div className="col-1 col-ml-auto">
                  <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="col-3 col-mr-auto">
                  <input className="form-input"
                         type="text"
                         id="email"
                         name="email"
                         placeholder="Email"
                         value={this.state.email}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-1 col-ml-auto">
                  <label className="form-label" htmlFor="password">Password: </label>
                </div>
                <div className="col-3 col-mr-auto">
                  <input className="form-input"
                         placeholder="password"
                         type="password"
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-7"></div>
                <button
                    className="btn btn-primary col-1 col-mr-auto"

                    onClick={this.handleSubmit}
                    type="submit">Login</button>
              </div>
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
            </form>
          </div>

      )
    }
  }
}

export default LoginForm
