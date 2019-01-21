import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image} from 'react-bootstrap'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch('/main')
      .then(res => res.json())
      .then(articles => this.setState({articles}, () => console.log('Customers fetched...', articles)));
  }

  render() {
    var single="/single/";
    return (
      <div >

      <ul className="Cust-ul">

      {this.state.articles.map(article =>
        <li  key={article._id}>
          <li className="Cust-li">
            <blockquote>
            <h1>{article.title}</h1>
            <p className="Use-text"> Category: </p>
            <cite>{article.category}</cite>
            <li className="Cust-img"> <a href={single+article._id}> <Image className="Cust-image" href="" src={article.feature_img}  height="400px" width="700px" /></a> </li>
            <p className="Use-text"> Author: <small>{article.author_name}</small></p>
            </blockquote>
          </li>

        </li>
      )}
      </ul>
      </div>
    );
  }
}

export default Customers;
