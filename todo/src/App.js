import React,{Component} from 'react';
import TodoList from "./Components/TodoList";

export default class App extends Component{
 state={
   count:0
 }

  increament= ()=>{
    this.setState(
      {count: this.state.count + 1}
    )
  }
  decrement= ()=>{
    this.setState(
      {count: this.state.count -1}
    )
  }

  render(){
    return(
      <div>
        <TodoList />
      </div>

    )
  }
}


