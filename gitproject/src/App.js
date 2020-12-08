import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'




function App() {
  const [name ,setName] =useState('')
  const [username,setUsername] =useState('')
  const [followers,setFollowers] =useState('')
  const [following,setFollowing] =useState('')
  const [respo,setRespo] =useState('')
  const [avatar,setAvatar] =useState('')
  const [userinput,setuserInput] =useState('')
  const [error,setError] =useState('')
  
  // useEffect(
    
  //     const api= await axios(`https://api.github.com/users/example`)
  //     .then(res =>{ res.json()})
  //     .then(data =>{
  //     setData(data)
  //   })
    
  // , [])  

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
    setuserInput(e.target.value)
  }
  const gitSubmit= async ()=>{
    
    const api=await axios(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    return api
  }
  return (
    <div>
      <input type="search" placeholder="Type your UserName" onChange={gitsearch} />
      <h3>name: {name}</h3>
      <h3>follower: {followers}</h3>
      <h3>following: {following}</h3>
      <h3>picture: {avatar}</h3>
      <h3>repositories: {respo}</h3>
      <input type='submit' onChange={gitSubmit}>Search</input>
    </div>
  );
}

export default App;
