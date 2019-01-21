import React, { Component } from 'react';
import './customers.css';
import { Button,Image,Glyphicon,FormGroup,FormControl,ControlLabel} from 'react-bootstrap'
import axios from "axios"
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      title: '',
      text: '',
      description: "",
      ingredients: "",
      url: "",
      category: "",
      redirect: false,
      success: true ,
      msg: "",
      id: "/article/",
      id2: "/account/edit/"
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    })

  }
  componentDidMount() {
    axios.get(this.state.id+this.props.id).then(response => {
      if (response.data) {
        console.log(response.data)
        this.setState(
          {
            article:response.data,
            title: response.data.title,
            text: response.data.text,
            description: response.data.description,
            ingredients: response.data.ingredients,
            url: response.data.feature_img,
            category: response.data.category,
          })
      } else {
        console.log("nihuya")
      }
    })
  }

    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state)
      axios
          .post(this.state.id2+this.props.id, {
            title: this.state.title,
            text: this.state.text,
            description: this.state.description,
            ingredients: this.state.ingredients,
            category: this.state.category,
            url: this.state.url,
          })
          .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response) {
              this.setState({redirect:true,msg: response.data.msg})
            }
          }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  }
  render() {
    if(!this.state.redirect) {
    return (

      <div className="asdf">



          <form className="Form-size2">
              <FormGroup
                controlId="formBasicText"

              >
              <Glyphicon glyph="glyphicon glyphicon-bookmark" />
              <ControlLabel>  Title <Glyphicon glyph="glyphicon glyphicon-asterisk" /> </ControlLabel>
                <FormControl
                       type="text"

                       name="title"
                       placeholder="Title"
                       defaultValue={this.state.article.title}
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
                       defaultValue={this.state.article.category}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup

              >
              <Glyphicon glyph="glyphicon glyphicon-text-width" />
              <ControlLabel>ext<Glyphicon glyph="glyphicon glyphicon-asterisk" /></ControlLabel>
              <p>{this.state.article.text}</p>
              <FormGroup controlId="formControlsTextarea"
              

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
              <p>{this.state.article.description}</p>
              <FormGroup>
                 <FormControl
                 name="description"
                 componentClass="textarea"
                 placeholder="Text"
                 onChange={this.handleChange}

                  />
                </FormGroup>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-th-list" />
              <ControlLabel>  Ingredients </ControlLabel>
                <FormControl
                       type="text"
                       id="ingredients"
                       name="ingredients"
                       placeholder="Ingredients"
                       defaultValue={this.state.article.ingredients}
                       onChange={this.handleChange}
                />
              </FormGroup>
              <div className="Cust-img"> <a href=""> <Image className="Cust-image" href="" src={this.state.article.feature_img}  height="5%" width="100%" /></a> </div>
              <FormGroup>
              <Glyphicon glyph="glyphicon glyphicon-picture" />
              <ControlLabel>  URL IMG </ControlLabel>
                <FormControl
                       type="text"
                       id="url"
                       name="url"
                       placeholder="URL"
                       defaultValue={this.state.article.feature_img}
                       onChange={this.handleChange}
                />
              </FormGroup>
                <Button

                    className="Form-btn"
                    onClick={this.handleSubmit}
                    type="submit">
                    Edit
                </Button>

              </FormGroup>

          </form>
        </div>



    );
  } else if(this.state.redirect){
    return(
      <form>
        <div className="Add-notif"><a href='/'><Glyphicon glyph="glyphicon glyphicon-ok" />{this.state.msg}</a></div>
      </form>
    )
  }
  }
}

export default Edit;
