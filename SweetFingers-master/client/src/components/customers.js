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
    var room="/about/";
    return (
      <div >

      <ul className="Cust-ul">

      {this.state.articles.map(article =>
        <li  key={article._id}>
          <li className="Cust-li">
            <blockquote>
            <p>{article.title}</p>
            <footer> Category: </footer>
            <cite>{article.category}</cite>
            <li className="Cust-img"> <a href={room+article._id}> <Image className="Cust-image" href="" src={article.feature_img}  height="5%" width="100%" /></a> </li>
            <footer> Recipe: </footer>
            <div className="Cust-text">

              <cite>{article.text}</cite>
            </div>
            <footer> Description: </footer>
            <div className="Cust-text">

              <cite>{article.description}</cite>
            </div>
            <footer> Ingredients: </footer>
            <div className="Cust-text">

              <cite>{article.ingredients}</cite>
            </div>

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
