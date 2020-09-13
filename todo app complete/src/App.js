import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from "./Components/Todos"
import Header from "./Components/layouts/Header"
import About from "./Components/layouts/About"
import AddTodo from "./Components/AddTodo"
import { v1 as uuidv1 } from 'uuid'
import axios from 'axios' 
import './App.css'
import Axios from 'axios'
class App extends Component {
  state={
    todos:[]
}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos : res.data}))
  }

  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
          todo.completed = !todo.completed
      }
      return todo;
    })})
  }
    delTodo=(id)=>{
     axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(
       res => 
       this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}
     ));
     
    }
    addTodo=(title)=>{
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed: false
        }).then(res => this.setState({
          todos: [...this.state.todos, res.data]
        }));
       
    }
  render(){
    return (
      <Router>
          <div className="App">
          <div className="container">
          <Header />
           <Route exact path="/" render={props => (
              <React.Fragment>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo ={this.delTodo}
              />
              <AddTodo addTodo={this.addTodo} />
            </React.Fragment>
           )} />
           <Route exact path="/About" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
