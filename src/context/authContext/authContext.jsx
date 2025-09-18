import { createContext, useContext } from "react";
import { useState } from "react";


// 1. creating the context
const AuthContext = createContext();


// 2. custom provider
export function AuthProvider({ children }) {
    const [login, setLogin] = useState(false);

    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

// 3.custom hook to get the value in other component
export function useAuthValue() {
    const value = useContext(AuthContext);
    return value;
}
