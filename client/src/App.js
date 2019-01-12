import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Navbars from './components/navbar';
import Forms from './components/forms';
import Headers from './components/header';
//import NavbarsMain from './components/mainNav';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<BrowserRouter>
        <div className="App">
        <Route exact={true} path='/' render={() => (
          <div className="App">
            <Navbars/>
              <form className="App-customers">
                <Headers/>
                <Customers/>
                </form>
          </div>
        )}/>
        <Route exact={true} path='/room' render={() => (
          <div className="App">
            <Navbars/>
              <form className="App-customers">
                <Headers/>
                <Forms/>
                </form>
          </div>
        )}/>
        </div>
</BrowserRouter>
    );
  }
}

export default App;
