import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Navbars from './components/navbar';
import Headers from './components/header';

class App extends Component {
  render() {
    return (

        <div>

        <Navbars/>

          <form className="App-customers">
            <Headers/>
            <Customers/>
          </form>
            <footer>
            asdfasdв
            </footer>
        </div>

    );
  }
}

export default App;
