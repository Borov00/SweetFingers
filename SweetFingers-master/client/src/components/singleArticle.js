import React, { Component } from 'react';
import './customers.css';
import {  Button,Image,Glyphicon,FormGroup,FormControl} from 'react-bootstrap'
import axios from "axios"
const ReactMarkdown = require('react-markdown');
class Articles extends Component {
  constructor() {
    super();
    this.state = {
      id: "/article/",
      id2: "/edit/",
      id3: "/single/",
      article: [],
      id_article: "",
      redirect: false,
      msg: "",
      comments:[],
      comment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendComment = this.sendComment.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount() {
    axios.get(this.state.id+this.props.id).then(response => {
      if (response.data) {
        console.log(response.data)
        this.setState({article:response.data})
      } else {
        console.log("nihuya")
      }
    })

    axios.get("/comment/"+ this.props.id).then(response => {
      if (response.data) {
        console.log(response.data)
        this.setState({comments: response.data})
      } else {
        console.log("nihuya")
      }
    })

  }
  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }
    handleSubmit(event) {

      axios
          .post('/account/delete', {
            id:this.props.id,
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

    sendComment(event) {
    //  event.preventDefault();
      axios
          .post('/comment', {
            comment: this.state.comment,
            id: this.props.id
          })
          .then(response => {
            console.log('login response: ')
            //console.log(response.data.id)

          }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })

      console.log(this.state.comment)
    }

  render()

  {

    if(!this.state.redirect) {
    return (
      <div>
      <ul className="asdf">
          <li className="sad" key={this.state.article._id} id="li">
            <li className="Cust-li" >
              <blockquote>
              <h1>{this.state.article.title}</h1>
              <p className="Use-text"> Category: </p>
              <cite>{this.state.article.category}</cite>
              <div className="Cust-img"> <a href=""> <Image className="Cust-image" href="" src={this.state.article.feature_img}  height="5%" width="100%" /></a> </div>

              <p className="Use-text"> Recipe: </p>
              <div className="Cust-text">

                <cite><ReactMarkdown source={this.state.article.text}/></cite>
              </div>
              <p className="Use-text"> Description: </p>
              <div className="Cust-text">

                <cite><ReactMarkdown source={this.state.article.description}/></cite>
              </div>
              <p className="Use-text"> Ingredients: </p>
              <div className="Cust-text">

                <cite><ReactMarkdown source={this.state.article.ingredients}/></cite>
              </div>
              <FormGroup>
              <Button className="Form-btn-edit" href={this.state.id2+this.props.id}>
                 Edit
                 <Glyphicon glyph="glyphicon glyphicon-pencil" />
               </Button >
               <Button className="Form-btn-delete" onClick={this.handleSubmit}>
                  Del
                  <Glyphicon glyph="glyphicon glyphicon-trash" />
                </Button >

              </FormGroup>

              </blockquote>
          <ul className="Cust-ul1">
            <blockquote>
            <h1>Comments: </h1>
            {this.state.comments.map(comment =>
            <li key={comment._id}>

            <div className="Cust-li1">
            <p className="media-left" >
              <img className="img-circle img-sm" alt="Профиль пользователя" src="https://i.imgur.com/gcSg5TD.png"/>
              {comment.name}
              <h5>{comment.createdAt}</h5>


              </p><h3 className="padding">{comment.text}</h3>
            <div className="media-body">
            <div className="mar-btm">

            </div>
            </div>
            </div>

            </li>
            )}
          <FormGroup >

          <FormGroup controlId="formControlsTextarea"
            
          >
            <FormControl
              className="Btn-Comm"
              name="text"
              componentClass="textarea"
              placeholder="Write comments..."
              onChange={this.handleChange}/>
          </FormGroup>
            <div className="input-group-append">
            <Button href={this.state.id3+this.props.id} className="Form-btn" onClick={this.sendComment}>
               Send
               <Glyphicon glyph="glyphicon glyphicon-send" />
             </Button >
            </div>

          </FormGroup>
          </blockquote>
          </ul>


        </li>
        </li>
        </ul>
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

export default Articles;
