import React,{useContext} from 'react'
import Form2 from'./Form2'
import {stateProvider} from './Context Api/Stateprovider'

function Forms() {
    const {setName}=useContext(stateProvider)
    return (
        <div>
            <form>
                <h1>Example of Form with props</h1>
                {/* <input type="text"  value={name.FirstName} onChange={e => setName({...name,FirstName: e.target.value})} placeholder="First Name"/>
                <input type="text"  value={name.LastName} onChange={e => setName({...name,LastName: e.target.value})} placeholder="Last Name"/>
                <h3>your full name is : {name.FirstName+" "+name.LastName}</h3> */}
                {setName('waleed')}
                <Form2 />

            </form>
        </div>
    )
}

export default Forms
