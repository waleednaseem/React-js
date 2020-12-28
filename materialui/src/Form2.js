import React,{useContext} from 'react'
import {stateProvider} from './Context Api/Stateprovider'


export default function Form2() {
    const {name }=useContext(stateProvider)
    return (
        <div>
            {name}
        </div>
    )
}
