import React,{useState,useEffect} from 'react'
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
      axios.get(`https://api.github.com/users/`)
      .then(response =>{
      setData(response.data)
    })
    
    }    
  , [])  

  const setData=({name,login,followers,following,public_repos,avatar_url,error})=>{
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRespo(public_repos)
    setAvatar(avatar_url)
    setError(error)
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
    }).catch(e=>{
      console.log(e.response);
      setError(e.response.data.message)
    })
    return api
  }
  return (
    <div style={mainDiv}>
      <Form userInfo={{name,followers,following,avatar,respo,error}} search={gitsearch} submit={gitSubmit}/>
    </div>
  );
}
const mainDiv={
  maxWidth: '100%',
  margin:'auto'
}

export default App;
