import React from 'react'

export default function Form({userInfo,submit,search}) {
    return (
            <div style={mainDiv}>
                <div style={div100}>
                    <div style={div50}>
                        <div style={formdiv}>
                            <form onSubmit={submit}>
                                <input type='search' style={inputsearch} placeholder='search here' onChange={search} />
                                <div style={oneDiv}>
                                    <img src={userInfo.avatar} style={image}/>
                                    <div>
                                    <h5 style={name}>Name : {userInfo.name}</h5>
                                    </div>
                                    <div style={div100}>
                                    <h4 style={div50}>Followers :{userInfo.followers}</h4> 
                                        <h4 style={div50}>Following :{userInfo.following}</h4>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={div50}>
                        {userInfo.respo}
                    </div>
                </div>
            </div>
            
        
    )
}
const div100={
    width: '100%',
    display:'inline-block'
}
const div50={
    width:'49%',
    display:'inline-block',
}
const name={
    color: 'black',
    fontSize:'26px',
    display:'flex'
}
const image={
    display:'flex',
    width: '100%'

}

const mainDiv={
    maxWidth: '100%',
}
const formdiv={
    alignContent: 'center',
    display:'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin:'auto',
}
const inputsearch={
    width:'50%',
    display:'flex',
    margin:'auto',
    marginBottom:'5px',
    padding: 'auto',
    border:'4px solid blue',
    borderTop:'0px',
    borderRight:'0px',
    borderLeft:'0px',
}
const oneDiv={
    border:'1px solid gray',
    width:'50%',
    hieght:'500px',
    margin:'auto',
    padding: '1px',
}