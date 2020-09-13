import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div style={headers}>
            <h2>Todo List</h2>
            <Link to="/" style={linkStyle}>home</Link> | <Link to="/About" style={linkStyle}>about</Link> |
        </div>
    )
    
}
const headers ={
    backgroundColor: '#000000',
    color: '#FEFEFE',
    textAlign: 'center',    
}

const linkStyle= {
    color:'#fff',
    textDecoration:'none'
}

