import React,{useContext,useState} from 'react'
import {StateProvider} from './Context Api/Stateprovider'

function Forms() {
    const {name,firstname,lastname}=useContext(StateProvider)
    
    return (
        <div>
            <form>
                <h1>Example of Form with props</h1>
                <input type="text"  value={name.FirstName} onChange={firstname} placeholder="First Name"/>
                <input type="text"  value={name.LastName} onChange={lastname} placeholder="Last Name"/>
                <h3>your full name is :{name.FirstName+" "+name.LastName}</h3>
            </form>
        </div>
    )
}

export default Forms
