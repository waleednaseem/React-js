import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { wooden } from './images/wooden.jpg';



class App extends Component {
  
  render() { 
    return (
      <Router baseName="/schoolsystem/">
        <div className="App">
          <div className="App-aside2"><img src={wooden} /></div>
          <div className="App-aside">
            <div className="page-switcher">
              <NavLink to="/Signin" activeClassName="page-active" className="page-switch" >Sign in</NavLink>
              

              <NavLink to="/Signup" activeClassName="page-active" className="page-switch">Sign up</NavLink>
            </div>
            <div className="form">
              <NavLink to="/Signin" activeClassName="form-active" className="form-active-link">Sign in </NavLink> or <NavLink to="/Signup" activeClassName="form-active" className="form-active-link"> Sign up</NavLink>
            </div>
            <Route path="/signup" component={Signup}>
              
            </Route>
            <Route path="/Signin" component={Signin}>
              
            </Route>
          </div>
        </div>
      </Router> 
      );
  }
}

export default App;