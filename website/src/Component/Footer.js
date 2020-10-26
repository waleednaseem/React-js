import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        
        return (
            <div>
                <footer style={footers} >
                    this is footer
                </footer>
            </div>
        )
    }
    
}
const footers = {
    backgroundColor : "black" ,
    color : "white" ,
    textAlign: 'center',
    // position: 'fixed',
    bottom: '0px',
    width: '100%',
}