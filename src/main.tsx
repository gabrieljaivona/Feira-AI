import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyOrders from './pages/MyOrders.tsx'
import Products from './pages/Products.tsx'
import Contact from './pages/Contact.tsx'
import Auth from './pages/Auth.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {index: true, element: <div>Home Page</div> },
      {path: "Products", element: <Products /> },
      {path: "MyOrders", element: <MyOrders /> },
      {path: "Contact", element: <Contact /> },
      {path: "Auth", element: <Auth /> },
      {path: "*", element: <NotFound />}
    ]
  },
  
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
