import React,{useState} from 'react'
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
  useEffect(() => {
    axios.fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data =>{
      setData(data)
    })
  }, [])

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
  const gitSubmit=()=>{
    axios.fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }
  return (
    <div>
      <input type="search" placeholder="Type your UserName" onChange={gitsearch} />
    </div>
  );
}

export default App;
