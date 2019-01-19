import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {Button,Jumbotron, Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon  } from 'react-bootstrap';
import Navbars from './navbar';
import Room from './room';
import Tools from './tittleTools';
import Articles from './singleArticle';
class About extends React.Component{
        render(){
            const id = this.props.match.params.id;
            return(
              <div >
              <Nav bsStyle="tabs" activeKey="1" >
               <NavItem eventKey="2" href="/">
               <Glyphicon glyph="glyphicon glyphicon-home" />
                 HOME
                </NavItem>
            </Nav>
              <Navbars tittle="Recipe"/>
                <form className="App-customers">
                  <Articles  id={id}/>
                </form>

              </div>
            )
            //<h2>id: {id}</h2>;
        }
    }
export default About;
