import React, { Component } from 'react';

function Form(props){

    return(
        <div>
        <form >
      <lable>
     Your first name : <input type="text" name="FirstName" placeholder="First name" onChange={props.handleChange}/>
     </lable>
     <br />
     <lable>
     Your Last name : <input type="text" name="LastName" placeholder="Last name" onChange={props.handleChange}/>
     </lable>
     <br />
     <lable>
     Your gender: 
     Male<input type="radio" name="gender" value="male" checked={props.Data.gender === "male"}  onChange={props.handleChange}/> 
     Female<input type="radio" name="gender" value="female" checked={props.Data.gender === "female"} onChange={props.handleChange}/>
     </lable>
     <br />
     your location your location :
      <select value={props.Data.location} name="location" onChange={props.handleChange}>
        <option value="dubai">dubai</option>
        <option value="pakistan">pakistan</option>
        <option value="london">london</option>
        <option value="America">America</option>
     </select>
     <br />
      <lable>
   Do you agree with my form ? <input type="checkbox" name="istrue" checked={props.Data.istrue} onChange={props.handleChange}/>
      
      </lable>
      <br />
      <button>submit form</button>
      </form>
      
      <label>
      Your name : {props.Data.FirstName} {props.Data.LastName}<br />
      Your gender : {props.Data.gender}<br />
      your location : {props.Data.location}<br />
      your agreement : {props.Data.istrue ? "You have agreed our agreement " : "dis-agreed"}
      </label>
    </div>
    )
    
}

export default Form