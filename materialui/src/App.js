import React ,{useState,useRef} from 'react'
import './App.css'
import Product from './Product'
import Forms from './Forms'
import MemoComponent from './MemoComponent'
import Todo from './Todoapp/Todo'
import { StateProvider } from "./Context Api/Stateprovider";
import {TodoContext} from './Todoapp/TodoContext'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [value , setvalue]=useState(0);
  const[product]= useState({id:1,title:'my car'})  
  const [name , setName] = useState()
  const [count, setCount]=useState(0)
  const [data,setData]=useState(100)
  const [todo , setTodo]= useState([])
  
  const todoRef=useRef()

  function tickTodo(id){
    const newTodo=[...todo]
    const todos= newTodo.find(todo => todo.id === id)
    todos.complete = !todos.complete
    setTodo(newTodo)
}
function del(){
    const newTodo=todo.filter(todo=>!todo.complete)
    
    setTodo(newTodo)
}
function addTodo(e){
    const name= todoRef.current.value
    if(name=== '')return
    setTodo(prev =>{
        return [...prev,{id:uuidv4(),name:name,complete:false}]
    })
    todoRef.current.value=null
}
  
  
  return (
    <div style={main}>
        <div style={practise2}>
          <TodoContext.Provider value={{todo,todoRef,setTodo,addTodo,del,tickTodo}}>
            <Todo />
          </TodoContext.Provider> 
        </div>
        <div style={practise}>
          <button onClick={()=> setvalue(value + 1)}>+</button>
          <h1> Example for button = {value}</h1>
          <button onClick={()=> setvalue(value - 1)}>-</button>
          <hr/>
            <Product 
              {...product}
          />
          <hr/>
          <StateProvider.Provider value={{name,setName}}>
            <Forms  />
          </StateProvider.Provider>
          <hr/>
          <MemoComponent data={data}/>
          <h1>counting : {count}</h1>
          <button onClick={()=> setCount(count +1)}>count</button>
          <button onClick={()=> setData(data + 100)}>data</button>
          
        </div>
        <div style={practise2}>
          
        </div>
      
    </div>
  )
}
const practise={
  maxWidth: '100%',
  margin:'10px',
  backgroundColor:'white'
}
const main={
  display:'flex',
}
const practise2={
  Width: '300px',
  margin:'10px',
}
export default App
