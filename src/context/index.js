import React, { createContext } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {

    return <ThemeContext.Provider value="light">
        {children}
    </ThemeContext.Provider>

}
export default ThemeProvider