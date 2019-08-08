import React , {Component} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export default class TodoList extends Component{
    state={
        Todos:[]
    };

    addTodo= todo => {
        this.setState({
            Todos: [todo, ...this.state.Todos]
        });
    };
    toggleComplete = (id) =>{
        this.setState({
            Todos : this.state.Todos.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    };
                }else{
                    return todo;
                }
            })
        });
    }
    
    render(){
        return(
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {this.state.Todos.map(todo =>(
                    <Todo key={todo.id}
                     Text={todo.Text}
                     toggleComplete={()=>this.toggleComplete(todo.id)}
                     />
                ))}               
            </div>
        );
    }
}