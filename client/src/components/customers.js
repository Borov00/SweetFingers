import React, { Component } from 'react';
import './customers.css';
import { Image} from 'react-bootstrap'
class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div >
        <h1>New recipes </h1>
        <ul className="Cust-ul">
        {this.state.customers.map(customer =>
          <li className="Cust-li" key={customer.id}>
            <h3 className="Cust-text"> {customer.name}</h3>
            <li>
              Recipe: {customer._id}
                <li className="Cust-img"> <Image  src={customer.url}  height="500" width="100%" /> </li>
            </li>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
