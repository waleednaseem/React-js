import React,{useContext} from 'react'
import {StateProvider} from './Context Api/Stateprovider'


export default function Form2() {
    const {name }=useContext(StateProvider)
    return (
        <div>
            {name}
        </div>
    )
}
