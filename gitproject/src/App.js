import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Form from './Form'




function App() {
  const [name ,setName] =useState('')
  const [username,setUsername] =useState('')
  const [followers,setFollowers] =useState('')
  const [following,setFollowing] =useState('')
  const [respo,setRespo] =useState('')
  const [avatar,setAvatar] =useState('')
  const [error,setError] =useState('')
  
  useEffect(()=>{
      axios.get(`https://api.github.com/users/waleednaseem`)
      .then(response =>{
      setData(response.data)
    })
    
    }    
  , [])  

  const setData=({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  })=>{
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRespo(public_repos)
    setAvatar(avatar_url)
  }
  const gitsearch=(e)=>{
    setUsername(e.target.value)
  }
  const gitSubmit=(e)=>{
    e.preventDefault();
    console.log(username)
    const api= axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      setData(res.data)
    })
    return api
  }
  return (
    <div>
     <form onSubmit={gitSubmit} >
      <input type='search' placeholder='search' onChange={gitsearch}/>
      <Form userInfo={{name,followers,following,avatar,respo}}/>
     </form>
    </div>
  );
}

export default App;
