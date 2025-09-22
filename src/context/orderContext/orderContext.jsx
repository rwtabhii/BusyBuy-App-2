import { createContext, useContext, useState } from "react";

const orderContext = createContext()
export function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  return <orderContext.Provider value={{ order, setOrder }}>
    {children}
  </orderContext.Provider>
}

export function useOrderValue() {
  const value = useContext(orderContext);
  return value;
}