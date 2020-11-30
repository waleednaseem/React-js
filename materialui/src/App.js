import React ,{useState} from 'react'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/Textfield'
import './App.css'

function App() {
  const [value , setvalue]=useState(0);
  
  const plus=()=>{
     setvalue(value + 1)
  }
  const minus=()=>{
    setvalue(value - 1)
  }
  return (
    <div>
     <button onClick={plus}>+</button>
      {value}
     <button onClick={minus}>-</button>
    </div>
  )
}

export default App
