import React ,{useState} from 'react'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/Textfield'
import './App.css'
import Product from './Product'
import Forms from './Forms'

function App() {
  const [value , setvalue]=useState(0);
  const[product]= useState({id:1,title:'my car'})  
  const [name , setName] = useState({FirstName:'',LastName:''})
  
  // const plus=()=>{
  //    setvalue(value + 1)
  // }
  // const minus=()=>{
  //   setvalue(value - 1)
  // }

  return (
    <div style={main}>
      <div style={practise}>
        <button onClick={()=> setvalue(value + 1)}>+</button>
        <h1> Example for button = {value}</h1>
        <button onClick={()=> setvalue(value - 1)}>-</button>
        <hr/>
        <Product 
        {...product}
        />
        <hr/>
        <Forms {...name} setName={setName} />
      </div>
    </div>
  )
}
const practise={
  maxWidth: '500px',
  margin:'auto',
  backgroundColor:'white'
}
const main={
 
}
export default App
