import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Navbars from './navbar';
import Room from './room';
import Tools from './tittleTools';
import Articles from './singleArticle';
class About extends React.Component{
        render(){
            const id = this.props.match.params.id;
            return(
              <div >
              <Tools id={id}/>
              <Navbars tittle="Recipe"/>
                <form className="App-customers">
                  <Articles  id={id}/>
                </form>
                <h2>id: {id}</h2>
              </div>
            )
            //<h2>id: {id}</h2>;
        }
    }
export default About;
