import React, { Component } from 'react';
import { Jumbotron,Grid , Row ,Col ,Image} from 'react-bootstrap'
import './customers.css';
class Navbars extends Component {

  render() {
    return (
      <div className="Nav-body">
        <h1>{this.props.tittle}</h1>
        <p>
        <Grid>
          <Row>
            <Col xs={12} className="Nav-logo">
              <Image  src="https://png.pngtree.com/element_origin_min_pic/17/08/16/d3346cb20bd72939e8b2431b069b9974.jpg" circle width="25%"/>
            </Col>
          </Row>
        </Grid>
        </p>
        <br/>
      </div>
    );
  }
}
export default Navbars;
