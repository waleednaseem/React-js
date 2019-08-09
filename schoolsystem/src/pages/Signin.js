import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from './Config/config';
import Login from './Login';

export default class Signin extends Component {
  
  constructor(props){
    super(props);

  // this.state={
  //   Email : '',
  //   Password: ''
  // },
   this.authListener = this.authListener.bind(this);
  }
  componentDidMount(){
      this.authListener();
  }

  authListener(){
    config.auth().onAuthStateChanged((user)=>{
      if(user){
       this.setState({user});
      }else{
        this.setState({user: null});
      }
    })
  }
  login(){

    const email = document.querySelector("#email").Value;
    const Password = document.querySelector("#Password").Value;

    config.auth().signInWithEmailAndPassword(email , Password).then((u)=>{
      console.log("your are succesfully loged in");
    }).catch((err)=>{
      console.log("Error" + err.toString());
    })
  }

  render() {
    return (
      <div className="form-center">
        <form onSubmit={this.login} className="formField" >
          <div>
            <label className="form-form" htmlFor="Email">
              Email
            </label>
            <input className="form-input" type="email" id="email" placeholder="type your email" name="Email"  />
          </div>   
          <div>
            <label className="form-form">
              Password
            </label>
            <input className="form-input" type="Password" id="Password" name="Password" placeholder="type your password" />
          </div>
          <div className="form-form">
             <button className="sign-button">Sign in</button><p className="pp">or</p> <Link to="/Signup" className="sign-link">Create your account now</Link>
          </div>
        </form>
      </div>  
    );
  }
}
 