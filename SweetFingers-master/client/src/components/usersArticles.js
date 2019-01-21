import React, { Component } from 'react';
import './customers.css';
import {Image} from 'react-bootstrap'
import axios from "axios"
class UserArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get('/my_articles/all').then(response => {
      if (response.data) {
        console.log(response.data)
        this.setState({articles:response.data})
      } else {
        console.log("nihuya")
      }
    })
  }

  render() {
    var room="/single/";
    return (
      <div >
      <h1> </h1>
        <ul className="Cust-ul">

        {this.state.articles.map(article =>
          <li  key={article._id}>
            <li className="Cust-li">
              <blockquote>
              <h1>{article.title}</h1>
              <p className="Use-text"> Category: </p>
              <cite>{article.category}</cite>
              <li className="Cust-img"> <a href={room+article._id}> <Image className="Cust-image" href="" src={article.feature_img}  height="5%" width="100%" /></a> </li>

              </blockquote>
            </li>

          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default UserArticles;
