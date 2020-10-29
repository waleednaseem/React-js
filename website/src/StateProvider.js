import React, { createContext, useContext , useReducer } from 'react'

// this is a data layer 
export const StateContext = createContext();

// build a provider  wrap the entire app
export const StateProvider=({reducer ,initialState ,children})=>(
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);