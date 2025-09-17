import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { LoginForm } from './pages/login/loginForm.jsx';
import { RegisterPage } from './pages/register/registerPage.jsx';
import { Home } from './pages/home/home.jsx';
import { CartPage } from './pages/cart/cart.jsx';
import { OrderPage } from './pages/order/orderPage.jsx';


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: < LoginForm /> },
      { path: "register", element: <RegisterPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order", element: <OrderPage /> }
    ]
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
