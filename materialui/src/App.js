import React ,{useState, useEffect} from 'react'
import './App.css'
import Product from './Product'
import Forms from './Forms'
import MemoComponent from './MemoComponent'
import Todo from './Todo'

function App() {
  const [value , setvalue]=useState(0);
  const[product]= useState({id:1,title:'my car'})  
  const [name , setName] = useState({FirstName:'',LastName:''})
  const [count, setCount]=useState(0)
  const [data,setData]=useState(100)
  const [todo , setTodo]= useState([])
  
  return (
    <div style={main}>
      <div style={practise2}>
        <Todo todo={todo} setTodo={setTodo} />
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
        <Forms name={name} setName={setName} />
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
