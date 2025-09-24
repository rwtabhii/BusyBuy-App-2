import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Navbar } from './component/navbar/navbar'
import { ProductProvider } from './context/productContext/productContext'
import { CartProvider } from './context/cartContext/cartContext'
import { OrderProvider } from './context/orderContext/orderContext'

function App() {
  return (
    <div className="app">
      {/* ✅ Wrap the entire app inside Context Providers 
          - ProductProvider → manages product data globally
          - CartProvider → manages shopping cart state globally
          - OrderProvider → manages user orders globally
      */}
      <ProductProvider>
        <CartProvider>
          <OrderProvider>

            {/* ✅ Toast notifications (success, error, info, etc.) */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            {/* ✅ Global Navbar (always visible across routes) */}
            <Navbar />

            {/* ✅ Renders the matched child route from react-router */}
            <Outlet />

          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
