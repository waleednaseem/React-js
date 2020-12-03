import React,{createContext ,useState} from 'react'
import nanoid from 'nanoid'

export const noteContext = createContext([])

export const noteProvider=({children})=>{
    const [note, setNote]=useState([])

    const AddNote =(text)=>{
        setNote(...note,{text,id: nanoid()})
    }
    const removeNote =(id)=>{
        setNote(note.filter(note.id != id))
    }
    return<noteContext.Provider value={{note,AddNote,removeNote}}>
        {children}
    </noteContext.Provider>
}