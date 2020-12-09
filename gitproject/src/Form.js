import React from 'react'

export default function Form({userInfo,submit,search}) {
    return (
        <div style={mainDiv}>
            <div style={formdiv}>
                <form onSubmit={submit}>
                    <input type='search' style={inputsearch} placeholder='search here' onChange={search} />
                    <div style={oneDiv}>
                        <img src={userInfo.avatar} style={image}/>
                        <div>
                            hi
                        </div>
                    </div>
                </form>
            </div>
        </div>
            
        
    )
}
const name={
    color: 'black',
    fontSize:'26px'
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
    maxWidth: '50%',
    margin:'auto',
    padding: 'auto',
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
    border:'0px solid gray',
    width:'50%',
    hieght:'500px',
    margin:'auto',
    padding: '1px',
}