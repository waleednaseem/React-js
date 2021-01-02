import {createContext,useState} from 'react'

 export const StateProvider=createContext([])

 const FormProvider=({children})=>{
        const [name,setName]=useState('')
        function firstname(e) {
            setName({...name,FirstName: e.target.value})
        }
        function lastname(e){
            setName({...name,LastName: e.target.value})
        }
     
    return(<StateProvider.Provider value={{name,setName,firstname,lastname}}>
        {children}
    </StateProvider.Provider>)
}
export default FormProvider