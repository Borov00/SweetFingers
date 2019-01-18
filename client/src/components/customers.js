import React, { Component } from 'react';
import './customers.css';
import { Table,Jumbotron, Button,Nav,Navbar,NavItem,MenuItem,NavDropdown,Image} from 'react-bootstrap'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/main')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div >
        <ul className="Cust-ul">
        {this.state.customers.map(customer =>
          <li className="Cust-li" key={customer.id}>
            <h1 className="Cust-text"> {customer.title}</h1>
            <li>
              Recipe: {customer._id}
                <li className="Cust-img"> <a href="/room"> <Image className="Cust-image" href="/room" src={customer.feature_img}  height="5%" width="100%" /></a> </li>
            </li>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
