import React from 'react'

export default function Form({userInfo}) {
    return (
        <div style={mainDiv}>
            <label style={name}>Name :{userInfo.name}</label>
            <div style={imgg}>
            <label style={name}>image</label>
            <img src={userInfo.avatar} style={image} alt='user image' />
           </div>
        </div>
    )
}
const name={
    color: 'black',
    fontSize:'26px'
}
const image={
    hieght: '100px',
    width: '150px'

}
const imgg={
    display:'flex'
}
const mainDiv={
    alignContent: 'center',
    display:'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin:'auto',
    padding: 'auto',
}