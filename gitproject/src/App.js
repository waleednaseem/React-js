import React from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const gitsearch=()=>{
    const api= axios.get('GET /users/{username}/events')
      
  }
  return (
    <div>
      <input type="search" placeholder="Type your UserName" onClick={gitsearch} />
    </div>
  );
}

export default App;
