import { createContext } from "react";
import { useState } from "react";


export const CustomerContext = createContext()


export const CustomerProvider = ({ children }) => {

    const [nome, setNome] = useState("")
    const [token, setToken] = useState("")
    const [render, setRender] = useState(false)

    return(
        <CustomerContext.Provider 
            value={ {nome, setNome, token, setToken, render, setRender} }>
            {children}
        </CustomerContext.Provider>
    )
}