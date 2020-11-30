import React from 'react'

function Forms(props) {
    return (
        <div>
            <form>
                <input type="text"  value={props.FirstName} onChange={e => props.setName({LastName: props.LastName,FirstName: e.target.value})} placeholder="First Name"/>
                <input type="text"  value={props.LastName} onChange={e => props.setName({FirstName: props.FirstName,LastName: e.target.value})} placeholder="Last Name"/>
                <h3>your full name is {props.FirstName+" "+props.LastName}</h3>
            </form>
        </div>
    )
}

export default Forms
