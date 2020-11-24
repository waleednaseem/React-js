import React from 'react'
import Button from '@material-ui/core/Button'
import Textfield from '@material-ui/core/Textfield'
import './App.css'

function App() {
  return (
    <div style={apps}>
      <Textfield variant="outlined">
      write something here
      </Textfield>
      <Button variant='contained' color='primary'>
        this is button
      </Button>
    </div>
  )
}
const apps={
  display: 'flex',
  alignContent: 'center'
}
export default App
