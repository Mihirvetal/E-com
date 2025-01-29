/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Clothes from './components/Clothes.jsx'
import Display from './components/Display.jsx'
import Electronics from './components/Electronics.jsx'
import Furnitures from './components/Furnitures.jsx'
import Toys from './components/Toys.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import ProductsDetails from './components/ProductsDetails.jsx'
import Cart from './components/Cart.jsx'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Display />
    
      },
      {
        path:'/clothes',
        element: <Clothes />
    
      },
      {
        path:'/electronics',
        element: <Electronics />
    
      },
      {
        path:'/furnitures',
        element: <Furnitures />
    
      },
      {
        path:'/toys',
        element: <Toys />
    
      },
      {
        path:'/login',
        element: <Login />
    
      },
      {
        path:'/signup',
        element: <SignUp />
    
      },
      {
        path:'/products/:id',
        element: <ProductsDetails />
    
      }
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
