import React from 'react'

export default function Form({userInfo,submit,search}) {
    return (
        <div style={mainDiv}>
            <form onSubmit={submit} >
                <input type='search' placeholder='search' onChange={search}/>
                <label style={name}>Name :{userInfo.name}</label>
                <div style={imgg}></div>
                <label style={name}>image</label>
                <img src={userInfo.avatar} style={image} alt='user image' />
            </form>
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