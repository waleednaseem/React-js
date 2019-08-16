import React,{Component} from 'react'
import './App.css'
import TodoItems from './components/TodoItems'
import TodoData from './components/TodoData'

class App extends Component {
  constructor() {
    super()
    this.state = { Todos : TodoData }
    this.handleChange =this.handleChange.bind(this);
  }
  
  handleChange(id){
    this.setState(prev => {
      const updateNow = prev.Todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        Todos : updateNow
      }
    })
  }
  render() { 
    
    const Todo = this.state.Todos.map(data => <TodoItems key={data.id} data={data} 
      handleChange={this.handleChange}/>)
     
    return(
      <div>
       {Todo}
      </div>
     
    )
  }
}
 

 


export default App;
