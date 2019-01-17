import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image} from 'react-bootstrap'

class UserArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch('/my_articles/all')
      .then(res => res.json())
      .then(articles => this.setState({articles}, () => console.log('Customers fetched...', articles)));
  }

  render() {
    return (
      <div >

        <ul className="Cust-ul">
        {this.state.articles.map(article =>
          <li className="Cust-li" key={article.id}>
            <h1 className="Cust-text"> {article.title}</h1>
            <li>
              Recipe: {article._id}
                <li className="Cust-img"> <a href="/room"> <Image className="Cust-image" href="/room" src={article.feature_img}  height="5%" width="100%" /></a> </li>
            </li>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default UserArticles;
