import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component{
   state={
       Text: ''
   };
   handleChange= (event)=>{
       this.setState({
           [event.target.name]: event.target.value
       });
   };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            Text: this.state.Text,
            complete:false
        });
        this.setState({
            Text:" "
        });
    };
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <input
                placeholder="Todo..."
                name="Text"
                value={this.state.Text}
                onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>
                Add Todo
            </button>
        </form>
        );
    }
}