import { createContext, useContext, useState } from "react";

const FreelanceContext = createContext();

export const FreelanceProvider = ({children}) => {

    

    return (
        <FreelanceContext.Provider value={{}} >
            {children}
        </FreelanceContext.Provider>
    )
}

export const useFreelance = () => useContext(FreelanceContext);