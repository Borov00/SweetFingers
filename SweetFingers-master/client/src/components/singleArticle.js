import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image,PageHeader,Glyphicon} from 'react-bootstrap'
import axios from "axios"
class Articles extends Component {
  constructor() {
    super();
    this.state = {
      id: "/article/"
    };
  }

  componentDidMount() {
    axios.get(this.state.id+this.props.id).then(response => {
      if (response.data) {
        console.log(response.data)
      } else {
        console.log("nihuya")
      }
    })
  }
  render() {
    return (

      // <h1> </h1>
      //   <ul className="Cust-ul">
      //
      //   {this.state.articles.map(article =>
      //     <li  key={article._id}>
      //       <li className="Cust-li">
      //         <blockquote>
      //         <p>{article.title}</p>
      //         <footer> Category: </footer>
      //         <cite>{article.category}</cite>
      //         <li className="Cust-img"> <a href=""> <Image className="Cust-image" href="" src={article.feature_img}  height="5%" width="100%" /></a> </li>
      //
      //         <footer> Recipe: </footer>
      //         <div className="Cust-text">
      //
      //           <cite>{article.text}</cite>
      //         </div>
      //         <footer> Description: </footer>
      //         <div className="Cust-text">
      //
      //           <cite>{article.description}</cite>
      //         </div>
      //         <footer> Ingredients: </footer>
      //         <div className="Cust-text">
      //
      //           <cite>{article.ingredients}</cite>
      //         </div>
      //
      //         </blockquote>
      //       </li>
      //
      //     </li>
      //   )}
      //   </ul>
      <h1>{this.state.id+this.props.id}</h1>


    );
  }
}

export default Articles;
