import React, { Component } from 'react'

export default class AddTodo extends Component {
    state={
        title:''
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    typing=(e)=> this.setState({[e.target.name]:[e.target.value]})
    render() {
        return (
            <div>
                <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                    <input type="text" 
                    name="title" 
                    placeholder="write your list here" 
                    style={{flex: '10', padding:'5px'}} 
                    value={this.state.title}
                    onChange={this.typing}
                    />

                    <input 
                    type="submit" 
                    name="submit"
                    className="btn" 
                    style={{flex: '1'}} 
                    />
                </form>
            </div>
        )
    }
}