import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image,PageHeader,Glyphicon} from 'react-bootstrap'
import axios from "axios"
class Articles extends Component {
  constructor() {
    super();
    this.state = {
      id: "/article/",
      article: []
    };
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
  }
  render() {

    return (

      <ul className="asdf">
          <li className="sad" key={this.state.article._id}>
            <li className="Cust-li" >
              <blockquote>
              <p>{this.state.article.title}</p>
              <footer> Category: </footer>
              <cite>{this.state.article.category}</cite>
              <div className="Cust-img"> <a href=""> <Image className="Cust-image" href="" src={this.state.article.feature_img}  height="5%" width="100%" /></a> </div>

              <footer> Recipe: </footer>
              <div className="Cust-text">

                <cite>{this.state.article.text}</cite>
              </div>
              <footer> Description: </footer>
              <div className="Cust-text">

                <cite>{this.state.article.description}</cite>
              </div>
              <footer> Ingredients: </footer>
              <div className="Cust-text">

                <cite>{this.state.article.ingredients}</cite>
              </div>

              </blockquote>
            </li>

          </li>
        </ul>



    );
  }
}

export default Articles;
