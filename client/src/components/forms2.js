import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
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
    console.log('sign-up handleSubmit, email: ')
    console.log(this.state.email)
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
    return (
        <div className="SignupForm">
          <h4>Sign up</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="name">Name: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                       placeholder="Name"
                       type="text"
                       name="name"
                       value={this.state.name}
                       onChange={this.handleChange}
                />
              </div>
            </div>
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
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="password">Confirm password: </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input className="form-input"
                       placeholder="Confirm password"
                       type="password"
                       name="confirmPassword"
                       value={this.state.confirmPassword}
                       onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col-7"></div>
              <button
                  className="btn btn-primary col-1 col-mr-auto"
                  onClick={this.handleSubmit}
                  type="submit"
              >Sign up</button>
            </div>
          </form>
        </div>

    )
  }
}

export default Signup
