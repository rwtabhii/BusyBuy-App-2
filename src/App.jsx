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
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
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
            <Navbar />
            <Outlet />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
