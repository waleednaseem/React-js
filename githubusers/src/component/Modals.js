import React,{useState} from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'


function Modals(props) {
     
    return (
        <div>
            <Modal isOpen={props.modal}>
            <div><h3>Name: {props.username}</h3>
            <h3>Follower: {props.follower}</h3>
            <h3>Following: {props.following}</h3>
            <h3>location: {props.location}</h3>
            <img style={imgs}src={props.image} alt='no images here'/></div>
            <button onClick={()=> props.setModal(false)}>close</button>
            </Modal>
        </div>
    )
}
const imgs={
    width:'250px',
    height:'250px'
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
export default connect(statetoprops,null)(Modals)