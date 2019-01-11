import React, { Component } from 'react';
import { Grid , Row ,Col ,Image} from 'react-bootstrap'
import './customers.css';
class Navbars extends Component {

  render() {
    return (
      <div className="Nav-body">
        <h1>Sweet Fingers</h1>
        <p>
        <Grid>
          <Row>
            <Col xs={12} className="Nav-logo">
              <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBVSg7HAVXNLDHeeOlXYeC9Jw_UEReqEjjxZCwGCmvrKqH6aU" circle />
            </Col>
          </Row>
        </Grid>
        </p>
      </div>
    );
  }
}
export default Navbars;
