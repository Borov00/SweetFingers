import React from 'react';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';

class SideNavPage extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
      <MDBContainer>
        <MDBRow>
          <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
        </MDBRow>
        <MDBSideNav
          logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          hidden
          triggerOpening={isOpen}
          breakWidth={1300}
          className="deep-purple darken-4"
        >
          <li>
            <ul className="social">
              <li>
                <a href="#!">
                  <MDBIcon icon="facebook" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon icon="google-plus" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <MDBIcon icon="twitter" />
                </a>
              </li>
            </ul>
          </li>
          <MDBSideNavNav>
            <MDBSideNavCat
              name="Submit blog"
              id="submit-blog"
              icon="chevron-right"
            >
              <MDBSideNavLink>Submit listing</MDBSideNavLink>
              <MDBSideNavLink>Registration form</MDBSideNavLink>
            </MDBSideNavCat>
            <MDBSideNavCat
              name="Instruction"
              id="instruction"
              icon="hand-pointer-o"
              href="#"
            >
              <MDBSideNavLink>For bloggers</MDBSideNavLink>
              <MDBSideNavLink>For authors</MDBSideNavLink>
            </MDBSideNavCat>
            <MDBSideNavCat name="About" id="about" icon="eye">
              <MDBSideNavLink>Instruction</MDBSideNavLink>
              <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
            </MDBSideNavCat>
            <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope-o">
              <MDBSideNavLink>FAQ</MDBSideNavLink>
              <MDBSideNavLink>Write a message</MDBSideNavLink>
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </MDBContainer>
      </div>
    );
  }
}

export default SideNavPage;
