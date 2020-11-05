import React,{useState} from 'react'
import {auth} from './Firebase'
import {Link , useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    const login=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{

        }).catch((e) => alert(e.message));
    }
    const signup=(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(
            auth =>{
                history.push('/');
            }
        ).catch((e)=> alert(e.message));
    }
    return (
        <div style={mainDiv}>
           <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" style={logo} alt='logo'/>
           <form style={Form}>
               <strong style={{fontSize:'20px'}}>Signin</strong>
               <p>UserName</p>
               <input value={email} style={Inputs} onChange={event=>setemail(event.target.value)} placeholder='Username'/>
               <p>Password</p>
               <input value={password} style={Inputs} onChange={(event)=> setpassword(event.target.value)} placeholder='password'/>
               <button style={Signin} onClick={login}>Sign in</button>
               <button style={Register} onClick={signup}>Sign up</button>
           </form>
        </div>
    )
}
const Form={
    display: 'flex',
    flexDirection: 'column',
    width:'250px',
    border:'1px solid gray',
    padding:'10px',
}
const Inputs={
    marginBottom: '10px',
    height:'30px',
    width: '98%',
}
const mainDiv={
   width:'300px',
   display:'flex',
   flexDirection:'column',
   padding: '20px',
   border: '1px solid lightgray',
   marginLeft:'auto',
   marginRight:'auto',
}
const logo={
    width:'100px',
    marginTop:'20px',
    marginBottom:'20px',
    objectFit: 'contain',
    marginLeft:'auto',
    marginRight:'auto',
}
const Signin={
    border:'1px solid gold',
    borderRadius:'20px',
    backgroundColor:'gold'

}
const Register={
    borderRadius:'2px',
    width:'100%',
    border:'1px solid',
    marginTop:'10px',
    borderColor:'gray',
    borderRadius:'20px'

}
export default Login
