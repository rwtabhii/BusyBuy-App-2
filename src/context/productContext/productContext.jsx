        import { createContext, useContext, useReducer, useState } from "react";
        import { productReducer } from "./productReducer";


        // 1. create the product context 
        const productContext = createContext();

        // 2. create the custom product context provider
        export function ProductProvider({children}){
            const inital = {
                allProducts:[],
                showProducts:[],
                searchProducts:[]
            }
            const [products,dispatchProduct] = useReducer(productReducer,inital);


        return (
            <productContext.Provider value={{products,dispatchProduct}}>
                {children}
            </productContext.Provider>
        )

        }

        // 3. creating the custom hook to get the value
        export function useProductValue(){
            const value = useContext(productContext);
            return value;
        }