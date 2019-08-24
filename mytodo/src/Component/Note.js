import React, { Component } from 'react';

class Note extends Component {
    
    render() { 
        return (
        <div onClick={this.props.deleteMethod}>
            {this.props.noteText}
        </div> )
    }
}
 
export default Note;