import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import SearchIcon from "@material-ui/icons/Search"
export default class Header extends Component {
    
    render() {
        return (
            <div>
               <nav style={{backgroundColor : "white"}}>
                    <Link path="#">
                    <img style={header} src="images/logo.jpg" alt="logo" />
                    </Link>
                    
                    <input style={input_field}  type="text" placeholder="search" />
                    <SearchIcon style={button} />
               </nav>
            </div>
        )
    }    
    
}
const header ={
   height : '100px',
   padding: '5px 0px ',
}
const input_field={
    padding : '2px',
    border : '10px 0px'
}
const button = {
    backgroundColor: 'brown',
    padding: '20px',
}