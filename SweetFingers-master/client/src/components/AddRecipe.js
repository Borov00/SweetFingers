import React, { Component } from 'react'
import axios from 'axios'
import {FormGroup,FormControl,ControlLabel,Glyphicon,Button} from 'react-bootstrap';
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
      success: true ,
      className: ""

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
  getValidationStateTitle() {
   var lengthTitle = this.state.title.length;
   if (lengthTitle > 1) {
     return 'success';
   } else if (lengthTitle >0){
     return 'error';
   }
 }
 getValidationStateText() {
  var lengthText = this.state.text.length;
  if (lengthText > 1) {
    return 'success';
  } else if (lengthText >0){
    return 'error';
  }
}


  handleSubmit(event) {
    event.preventDefault();
      console.log('handleSubmit')

        if(this.getValidationStateText()==="success" && this.getValidationStateTitle()==="success") {
          this.setState({redirect: true})

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

        } else {
          this.setState({className: "Form-red"})
        }
console.log(this.state)

  }
  functionq(){
      if(!this.state.redirect) {
        return (
          <form className="Form-size1">
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationStateTitle()}
              >
              <Glyphicon glyph="glyphicon glyphicon-bookmark" />
              <ControlLabel>  Title <Glyphicon glyph="glyphicon glyphicon-asterisk" /> </ControlLabel>
                <FormControl
                       type="text"

                       name="title"
                       placeholder="Title"
                       value={this.state.title}
                       onChange={this.handleChange}
                       className={this.state.className}
                       required
                />

              </FormGroup>
              <FormGroup

              >
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
              <FormGroup

              >
              <Glyphicon glyph="glyphicon glyphicon-text-width" />
              <ControlLabel>ext<Glyphicon glyph="glyphicon glyphicon-asterisk" /></ControlLabel>
              <FormGroup controlId="formControlsTextarea"
              
                validationState={this.getValidationStateText()}
              >
                <FormControl
                  name="text"
                  componentClass="textarea"
                  placeholder="Text"
                  className={this.state.className}
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
            <div className="Add-notif"><a href='/room'><Glyphicon glyph="glyphicon glyphicon-ok" /> Recipe added</a></div>
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
