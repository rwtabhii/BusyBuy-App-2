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
import { ErrorPage } from './pages/errorPage/errorPage.jsx';
import { ProtectRoute } from './component/protectRoute/protectedRoute.jsx';
import { AuthProvider } from './context/authContext/authContext.jsx';


const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorPage />,
    children: [
      { index: true, element:<Home />, errorElement: <ErrorPage /> },
      { path: "login", element: < LoginForm />, errorElement: <ErrorPage /> },
      { path: "register", element: <RegisterPage />, errorElement: <ErrorPage /> },
      { path: "cart", element: <ProtectRoute> <CartPage /></ProtectRoute>, errorElement: <ErrorPage /> },
      { path: "order", element: <ProtectRoute> <OrderPage /></ProtectRoute> , errorElement: <ErrorPage /> }
    ]
  }]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
