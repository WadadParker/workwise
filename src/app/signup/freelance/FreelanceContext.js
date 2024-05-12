import { createContext, useContext, useReducer, useState } from "react";

const FreelanceContext = createContext();

export const FreelanceProvider = ({children}) => {

    const FreelanceReducer = (state,{type,payload,inputField}) => {
        switch(type) {
            case "INPUT_FIELDS":
                return {...state,[inputField]:payload}
        }
    }

    const initialState = {
        name:"",
        email:"",
        password:"",
        hourlyRate:"",
        domain:"",
        domain:[],
        skills:[]
    }

    const [state,dispatch] = useReducer(FreelanceReducer,initialState);

    return (
        <FreelanceContext.Provider value={{state,dispatch}} >
            {children}
        </FreelanceContext.Provider>
    )
}

export const useFreelance = () => useContext(FreelanceContext);