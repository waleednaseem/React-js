import React, { Component } from 'react'

export default class TodoItems extends Component {
    
    getStyle= ()=>{
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '50%',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    markComplete=(e)=>{
            console.log(this.props)
    }
    
    render() {

        const {id , title}= this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    {<input type="checkbox" onChange={this.props.markComplete.bind(this ,id)}/>}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>            
            </div>
        )
    }
}
const btnStyle={
    backgroundColor: 'red',
    float: 'right',
    cursor: 'pointer',
    padding: '5px 9px',
    borderRadius: '50%',
    border: 'none'
}

