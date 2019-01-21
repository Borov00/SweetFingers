import React, { Component } from 'react';
import './customers.css';
import {Glyphicon ,FormGroup,FormControl,ControlLabel,Button  } from 'react-bootstrap';
import axios from "axios";


class Room extends Component {
  constructor() {
    super();
      this.state = {
        user: [],
        name: "",
        email: "",
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
    }
    componentDidMount() {
      axios.get('/bc_room').then(response => {

        if (response.data) {
          this.setState({user: response.data,name: response.data.name, email:response.data.email})
        } else {
          console.log("nihuya")
        }
      })
    }

    handleChangeName(event) {
      this.setState({
        name: event.target.value
      })
    }
    handleChangeEmail(event) {
      this.setState({
        email: event.target.value
      })
    }

    handleSubmit(event) {
      axios
          .post('/account/profile', {
            name: this.state.name,
            email: this.state.email
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

  return (

          <form className="Form-size1">
          <h3>{this.state.user.name} </h3>
          <FormGroup className="Room-forms">
            <Glyphicon glyph="glyphicon glyphicon-user" />
            <ControlLabel>Your NickName</ControlLabel>
            <FormControl
              id="name"
              name="name"
              type="text"
              defaultValue={this.state.user.name}
              onChange={this.handleChangeName}
              required
            />

          </FormGroup>
          <FormGroup className="Room-forms">
            <Glyphicon glyph="glyphicon glyphicon-envelope" />
            <ControlLabel>Your Email</ControlLabel>
            <FormControl
              id="email"
              name="email"
              type="email"
              onChange={this.handleChangeEmail}
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
            <Button href="/room" className="Form-btn-2" onClick={this.handleSubmit}>
              edit
              <Glyphicon glyph="glyphicon glyphicon-pencil" />
            </Button >
          </FormGroup>
          </form>

  );

}
  render() {

    return(
      <div> {this.props.id}
      {this.functionq()}
    </div>
  )
  }
}

export default Room;
