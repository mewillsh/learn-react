import { createContext , useContext } from "react";

export let UserContext = createContext(
    {
        themeMode : "light",
        setLight : ()=>{},
        setDark : ()=>{}
    }
)

export let ThemeProvider = UserContext.Provider

export default function useTheme(){
    return useContext(UserContext)
}