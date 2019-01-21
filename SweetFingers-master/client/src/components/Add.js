import React, { Component } from 'react';
import {Navbar,Glyphicon  } from 'react-bootstrap';
import Navbars from './navbar';
import Articles from './singleArticle';
class About extends Component{
        render(){
            const id = this.props.match.params.id;
            return(
              <div >
              <Navbar>
               <Navbar.Header>
               <Navbar.Brand>
                 <a href="/"><Glyphicon glyph="glyphicon glyphicon-home"/>Home</a>
               </Navbar.Brand>
               <Navbar.Toggle />
               </Navbar.Header>
         </Navbar>
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
