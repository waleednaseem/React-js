import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'


export default class Header extends Component {
    
    render() { 
        return (
            <div style={headers}>
                <Link path="/">
                {/* <img style={Logo} src="images/logo.jpg" alt="logo" /> */}
                <img style={Logo} src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo" />
                </Link>

                <div style={header__search}>
                <input style={header__searchInput} type="text" placeholder="search" />
                <Search style={header_searchIcon} />
               </div>
               <div style={NavHeader}>
                   <Link to="/login" style={HeaderLink}>
                    <div style={HeaderOptions}>
                    <span style={headoption1}>hello waleed</span>
                    <span style={headOption2}>Sign in</span>
                    </div>
                   </Link>
                   <Link to="/" style={HeaderLink}>
                    <div style={HeaderOptions}>
                    <span style={headoption1}>return</span>
                    <span style={headOption2}>& order</span>
                    </div>
                   </Link>
                   <Link to="/" style={HeaderLink}>
                    <div style={HeaderOptions}>
                    <span style={headoption1}>your</span>
                    <span style={headOption2}>prime</span>
                    </div>
                   </Link>
                   <Link to="/" style={HeaderLink}>
                    <div style={HeaderOptions}>
                    <span style={headoption1}>your</span>
                    <span style={headOption2}>prime</span>
                    </div>
                   </Link>
               </div>
               

            </div>
        )
    }    
    
}
const Logo ={
   height : '40px',
   marginLeft: '05px', 
   marginRight: '18px', 
//    marginTop: '20px', 
}
const headers={
    backgroundColor: 'black',
    alignItems: 'center',
    display:'flex'
}
const header__search={
           display : 'flex',
           flex: '1',
}
const header__searchInput={
    height : '30px',
    padding: '10px',
    border:'none',
    width:'100%',
}
const header_searchIcon = {
    backgroundColor: 'brown',
    padding: '4px',
    height: '30px',
    display:'flex'
}
const NavHeader ={
    display : 'flex',
    justifyContent : 'space-evenly'
}
const HeaderLink={
    color : 'white',
    textDecoration: 'none'
}
const HeaderOptions={
    display :'flex',
    flexDirection: 'column'
}
const headoption1={

}
const headOption2={

}