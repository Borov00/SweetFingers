import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {FormGroup,FormControl,ControlLabel,HelpBlock, InputGroup,Glyphicon, Image,Button} from 'react-bootstrap';
import './customers.css';
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      text: '',
      description: "",
      ingredients: "",
      url: "",
      category: "",
      redirect: false,
      success: true
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
        this.setState({redirect: true})
        if(this.state.title.length==0) {
          this.setState({success: false})
        }
        if(this.state.success) {
          axios
              .post('/my_articles', {
                title: this.state.title,
                text: this.state.text,
                description: this.state.description,
                ingredients: this.state.ingredients,
                category: this.state.category,
                url: this.state.url
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
        console.log(this.state)
  }
  functionq(){
      if(!this.state.redirect) {
        return (
          <form className="Form-size1">
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-bookmark" />
              <ControlLabel>  Title </ControlLabel>
                <FormControl
                       type="text"
                       id="title"
                       name="title"
                       placeholder="Title"
                       value={this.state.title}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-th-list" />
              <ControlLabel>  Category </ControlLabel>
                <FormControl
                       type="text"
                       id="category"
                       name="category"
                       placeholder="Category"
                       value={this.state.category}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-text-width" />
              <ControlLabel>Text</ControlLabel>
              <FormGroup controlId="formControlsTextarea">
                <FormControl
                  name="text"
                  componentClass="textarea"
                  placeholder="Text"
                  onChange={this.handleChange}/>
              </FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-pencil" />
              <ControlLabel>Description</ControlLabel>
              <FormGroup controlId="formControlsTextarea">
                <FormControl
                  name="description"
                  componentClass="textarea"
                  placeholder="Text"
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-th-list" />
              <ControlLabel>  Ingredients </ControlLabel>
                <FormControl
                       type="text"
                       id="ingredients"
                       name="ingredients"
                       placeholder="Ingredients"
                       value={this.state.ingredients}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-picture" />
              <ControlLabel>  URL IMG </ControlLabel>
                <FormControl
                       type="text"
                       id="url"
                       name="url"
                       placeholder="URL"
                       value={this.state.url}
                       onChange={this.handleChange}
                />
              </FormGroup>
                <Button

                    className="Form-btn"
                    onClick={this.handleSubmit}
                    href={this.state.href}
                    type="submit">
                    Save
                </Button>

              </FormGroup>

          </form>
        )
      } else {
        return(
          <form>
            <div className="Add-notif"><a href='/myArticles'><Glyphicon glyph="glyphicon glyphicon-ok" /> Recipe added</a></div>
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
