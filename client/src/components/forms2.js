import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon, Image,Button} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import './customers.css';

class Forms1 extends React.Component {
  state = {
      name:'',
      email: '',
      password: '',
      className: '',
      message: ""
    }

    handleChange1 = event => {

      this.setState({ email: event.target.value });

    }
    handleChange2 = event => {

      this.setState({ password: event.target.value });

    }
    handleChange3 = event => {

      this.setState({ name: event.target.value });

    }

    handleSubmit = event => {
      event.preventDefault();
      if(this.state.password.length>7 || !this.state.email.includes("@")) {
      axios.post('http://localhost:5000/signUp', { name: this.state.name ,email: this.state.email, password: this.state.password })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      } else {
        this.setState({message: "incorrect data"});

      }



    }
  render() {

    return (
      <div>
      <form className="Form-size1">

        <FormGroup>
          <Glyphicon glyph="glyphicon glyphicon-user" />
          <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Name"
              onChange={this.handleChange3}
            />
        </FormGroup>
        <FormGroup>
          <Glyphicon glyph="glyphicon glyphicon-envelope" />
          <ControlLabel>Email</ControlLabel>
          <FormControl
          className={this.state.className}
            type="email"
            placeholder="Email"
            onChange={this.handleChange1}

          />
        </FormGroup>
        <FormGroup  >
          <Glyphicon glyph="glyphicon glyphicon-lock" />
          <ControlLabel>Password</ControlLabel>
          <FormControl
            className={this.state.className}
            type="password"
            placeholder="Password"
            onChange={this.handleChange2}
          />
          <ControlLabel className="Form-text-red">{this.state.message}</ControlLabel>
          <Button onClick={this.handleSubmit} className="Form-btn" >Send</Button >
        </FormGroup>
        <br/>
        <FormGroup>
          <a href="#">
            <Image
              src="http://www.delgosea.eu/var/ezwebin_site/storage/images/media/images/fb-icon/7363-1-eng-GB/fb-icon.jpg"
              circle width="10%"
              heignt="10%"
            />
          </a>
          <a href="#">
            <Image
              src="https://yt3.ggpht.com/a-/AN66SAwKgKC5at8ZPnDOpe2iTpPw73EIKyNf1IPTEg=s900-mo-c-c0xffffffff-rj-k-no"
              circle width="10%"
              hieght="10%"
            />
          </a>
          <a href="#">
            <Image
              src="http://4.bp.blogspot.com/-vH-WfuJ0QEo/VwRNHbvAVKI/AAAAAAAAAnc/pBbly7JHBkkh-uyIZaioI_HTp8zAQHmRQ/s1600/twitter_logo.png"
              circle width="10%"
              hiegnt="10%"
            />
          </a>
          <a href="#">
            <Image
              src="https://avatanplus.com/files/resources/original/57c14894a6171156cb0384c8.png"
              circle width="10%"
              heignt="10%"
            />
          </a>
        </FormGroup>
      </form>

      </div>
    );
  }
}
export default Forms1 ;
