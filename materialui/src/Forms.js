import React from 'react'

function Forms({name ,setName}) {
    return (
        <div>
            <form>
                <h1>Example of Form with props</h1>
                <input type="text"  value={name.FirstName} onChange={e => setName({...name,FirstName: e.target.value})} placeholder="First Name"/>
                <input type="text"  value={name.LastName} onChange={e => setName({...name,LastName: e.target.value})} placeholder="Last Name"/>
                <h3>your full name is : {name.FirstName+" "+name.LastName}</h3>
            </form>
        </div>
    )
}

export default Forms
