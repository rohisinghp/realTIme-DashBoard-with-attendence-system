import { createContext,useState } from "react";

export const  ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [color,setcolor]=useState('white');
    const toggleTheme=()=>{
        console.log("hi")
        setcolor('red');
    }
    return(
        <ThemeContext.Provider value={{color,toggleTheme}}>{children}</ThemeContext.Provider>
    )
}