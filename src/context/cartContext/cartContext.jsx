import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "./cartReducer";
// 1.create Context of cart
const cartContext = createContext();

// 2. create the custom provider of the context 
export function CartProvider({ children }) {
    const [cart, dispatchCart] = useReducer(cartReducer,[])
    return (
        <cartContext.Provider value={{cart,dispatchCart}}>
            {children}
        </cartContext.Provider>
    )
}
// 3.create the custom hook to get the value
export function useCartValue() {
    const value = useContext(cartContext)
    return value;
}