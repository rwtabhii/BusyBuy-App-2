import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Navbar } from './component/navbar/navbar'
import { ProductProvider } from './context/productContext/productContext'
import { CartProvider } from './context/cartContext/cartContext'



function App() {

  return (
    <div className="app">
      <ProductProvider>
        <CartProvider>
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
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App
