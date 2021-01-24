import React from 'react'
import {connect} from 'react-redux'
import Modals from './Modals'

 function List(props) {
    // const modal=(e)=>{
    //     e.preventDefault()
    //     <Modals/>
    // }
    return (
        <div>
                <button style={users} onClick={props.fullname.map(data => 
                <Modals 
                
                />
                )}>
                    {props.fullname}
                </button>
        </div>
    )
}
const users={
    border:'0 solid gray',
    padding: '20px',
}
const statetoprops=state=>{
    
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
export default connect(statetoprops,null)(List)