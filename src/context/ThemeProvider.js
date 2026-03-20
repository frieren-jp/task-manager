import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    themes: ["dark","ligth"],
    setTheme: ()=>{}
})


export function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark")



    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
