import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image,PageHeader,Glyphicon} from 'react-bootstrap'
import axios from "axios"
class Articles extends Component {
  constructor() {
    super();
    this.state = {
      id: "/article/",
      article: [],
      id_article: "",
      redirect: false,
      msg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    axios.get(this.state.id+this.props.id).then(response => {
      if (response.data) {
        console.log(this.props.id)
        this.setState({article:response.data})
      } else {
        console.log("nihuya")
      }
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
  render() {
    if(!this.state.redirect) {
    return (

      <ul className="asdf">
          <li className="sad" key={this.state.article._id} id="li">
            <li className="Cust-li" >
              <blockquote>
              <p>{this.state.article.title}</p>
              <p className="Use-text"> Category: </p>
              <cite>{this.state.article.category}</cite>
              <div className="Cust-img"> <a href=""> <Image className="Cust-image" href="" src={this.state.article.feature_img}  height="5%" width="100%" /></a> </div>

              <p className="Use-text"> Recipe: </p>
              <div className="Cust-text">

                <cite>{this.state.article.text}</cite>
              </div>
              <p className="Use-text"> Description: </p>
              <div className="Cust-text">

                <cite>{this.state.article.description}</cite>
              </div>
              <p className="Use-text"> Ingredients: </p>
              <div className="Cust-text">

                <cite>{this.state.article.ingredients}</cite>
              </div>
              <Button className="Form-btn-1" onClick={this.handleSubmit}>
                Del
                <Glyphicon glyph="glyphicon glyphicon-trash" />
              </Button >
              </blockquote>
            </li>

          </li>
        </ul>



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
