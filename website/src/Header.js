import React from 'react'
import { Link } from 'react-router-dom'
import { Search , ShoppingBasket } from '@material-ui/icons'
import {useStateValue} from './StateProvider'



export default function Header() {
    const [{basket ,user}]= useStateValue();
    return (
        <div style={headers}>
                <Link to="/">
                {/* <img style={Logo} src="images/logo.jpg" alt="logo" /> */}
                <img style={Logo} src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="logo" />
                </Link>

                <div style={header__search}>
                <input style={header__searchInput} type="text" placeholder="search" />
                <Search style={header_searchIcon} />
               </div>
               <div style={NavHeader}>
                   <Link to={!user && "./login"} style={HeaderLink}>
                    <div style={HeaderOptions}>
                    <span style={headoption1}>{user?.email}</span>
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
                   <Link to="/checkout" style={HeaderLink}>
                    <div style={HeaderOptions_basket}>
                    <ShoppingBasket />
                    <span style={headOption2,Basket}>{basket?.length}</span>
                    </div>
                   </Link>
               </div>
               

            </div>
    )
}

const Logo ={
   height : '40px',
   marginLeft: '05px', 
   marginRight: '18px', 
}
const headers={
    backgroundColor: 'black',
    alignItems: 'center',
    display:'flex',
    position: 'sticky',
    zIndex: '100'
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
    backgroundColor: '#FF8C00',
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
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight:'10px'
}
const HeaderOptions={
    display :'flex',
    flexDirection: 'column'
}
const headoption1={
    fontSize:'10px'
}
const headOption2={
    fontSize: '13px',
    fontWeight: '700'
}
const HeaderOptions_basket={
    display : 'flex',
}
const Basket={
    marginLeft: '05px',
    marginRight:'05px'
}