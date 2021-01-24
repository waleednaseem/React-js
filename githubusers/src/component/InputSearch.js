import React,{useState} from 'react'
import {connect} from 'react-redux'
import  * as activefunctions from '../Redux/action'
import Modals from './Modals'


export function InputSearch(props) {
    const [modal,setModal]=useState(false)
    const submitfunc=(e)=>{
        e.preventDefault()
       props.setusername(e)
       console.log(e.target.value)
    }
    const handledata=(e)=>{
        // e.preventDefault()
        props.getdata(e,props.username)
        setModal(true)
    }
    
    return (
        <div>
            <input type='text' placeholder='Search githuub users' onChange={submitfunc}/>
            <br/>
            <input type='button' placeholder='submit' onClick={handledata} value='submit'/>
            
            <Modals modal={modal} setModal={setModal}/>
        </div>
    )
}
const statetoprops=state=>{
    // console.log(state)
    return {
        username:state.username,
        follower:state.follower,
        following:state.following,
        image:state.image,
        location:state.location,
        fullname:state.fullname,
        error:state.error
    }
}
const dispatchtoprops= dispatch =>{
    return{
        setusername: e=> dispatch(activefunctions.setusername(e)),
        getdata: (e,username) => dispatch(activefunctions.getdata(e,username))
    }
}


export default connect(statetoprops,dispatchtoprops)(InputSearch)