import React ,{useState} from 'react'
import './App.css'
import Product from './Product'
import Forms from './Forms'
import MemoComponent from './MemoComponent'
import Todo from './Todoapp/Todo'
import  FormProvider from './Context Api/Stateprovider'
import TodoProvider from './Todoapp/TodoContext'
import Counting from './Counting'
import TodoRedux from './TodoRedux/TodoRedux'
import {provider} from 'redux'
import store from './Redux/store'
import { Provider } from 'react-redux'


function App() {
  const [value , setvalue]=useState(0);
  const[product]= useState({id:1,title:'my car'})  
  
  const [count, setCount]=useState(0)
  const [data,setData]=useState(100)
  
  
  
  return (
    <div style={main}>
        <div style={practise2}>
          <TodoProvider>
            <Todo />
          </TodoProvider> 
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
          <FormProvider>
            <Forms/>
          </FormProvider>
          <Counting/>
        </div>

        <div style={practise2}>
          <Provider store={store}>
            <TodoRedux/>
          </Provider>
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
