import React, { Component } from 'react';
import {Navbar,Glyphicon  } from 'react-bootstrap';
import Navbars from './navbar';
import Edit from './editArticle';
class  Transfer extends Component{
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
              <Navbars tittle="Edit"/>
                <form className="App-customers">
                  <Edit id={id}/>
                </form>

              </div>
            )
            //<h2>id: {id}</h2>;
        }
    }
export default Transfer;
