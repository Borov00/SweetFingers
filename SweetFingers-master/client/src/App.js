import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Customers from './components/customers';
import Navbars from './components/navbar';
import Forms from './components/forms';
import Headers from './components/header';
import Forms1 from './components/forms2';
import Room from './components/room';
import Tools from './components/tittleTools';
import Tools2 from './components/tittleTools2';
import About from './components/Add';
import UserArticles from './components/usersArticles';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {Form} from 'react-bootstrap';
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,

    }
    this.functionq=this.functionq.bind(this);
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/main2').then(response => {

      if (response.data) {
        this.setState({loggedIn: response.data.success})

      } else {
        this.setState({loggedIn: false})
      }
    })
  }
  functionq(){
    if (this.state.loggedIn===true) {
      return(
        <Tools2/>
      )
    } else {
      return(
        <Headers/>
      )
    }
  }
  render() {
    return (
<BrowserRouter>
        <div className="App">
        <Switch>
        <Route exact path='/' render={() => (
          <div >
            {this.functionq()}

              <Navbars tittle="New Recipes" sweet="Sweet Fingers"/>
              <Form className="App-customers">

                <Customers/>
                </Form>
          </div>
        )}/>
        <Route  path='/signIn' render={() => (
          <div>
          {this.functionq()}
            <Navbars tittle="Sign IN" />
              <Form className="App-customers">

                <Forms status={this.state.loggedIn}/>
                </Form>
          </div>
        )}/>
        <Route path='/signUp' render={() => (
          <div >
          {this.functionq()}
            <Navbars tittle="Sign UP"/>
              <Form className="App-customers">

                <Forms1 status={this.state.loggedIn}/>
                </Form>
          </div>
        )}/>
        <Route  path='/room' render={() => (
          <div >
          <Tools/>
            <Navbars tittle="Room"/>
              <form className="App-customers">
                <Room status={this.state.loggedIn}/>
              </form>
          </div>
        )}/>
        <Route path='/myArticles' render={() => (
          <div >
          <Tools/>
            <Navbars tittle="My Recipes"/>
              <form className="App-customers">
                <UserArticles status={this.state.loggedIn}/>

              </form>
          </div>
        )}/>
        <Route path="/about/:id" component={About} />
        </Switch>
        </div>
</BrowserRouter>
    );
  }
}

export default App;
