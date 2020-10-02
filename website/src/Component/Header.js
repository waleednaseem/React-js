import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
// import { Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'


export default class Header extends Component {
    
    render() {
        return (
            <div style={headers}>
                <Link path="/">
                <img style={Logo} src="images/logo.jpg" alt="logo" />
                </Link>

                <div style={header__search}>
                <input style={header__searchInput} type="text" placeholder="search" />
                <Search style={header_searchIcon} />
               </div>

            </div>
        )
    }    
    
}
const Logo ={
   height : '60px',

}
const header__searchInput={
    height : '12px',
    padding: '10px',
    border:'none',
    width:'100%',
}
const header_searchIcon = {
    backgroundColor: 'brown',
    padding: '1px',
}
const headers={
    backgroundColor: 'black',
    alignItems: 'center',
}
const header__search={
    display : 'flex',
}