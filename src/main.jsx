import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'

import AddProduct from './Components/AddProduct.jsx'
import MyCart from './Components/MyCart.jsx'
import Apple from './Components/Brand/Apple.jsx'
import Lg from './Components/Brand/Lg.jsx'
import Infinix from './Components/Brand/Infinix.jsx'
import Oppo from './Components/Brand/Oppo.jsx'
import Samsung from './Components/Brand/Samsung.jsx'
import Sony from './Components/Brand/Sony.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import PrivateRoute from './Providers/PrivateRoute.jsx'
import Error from './Components/Error'


const myRouter = createBrowserRouter([{
  path: '/',
  element: <Root></Root>,
  errorElement:<Error></Error>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('/data.json')
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Signup></Signup>
    },
    {
      path: '/add',
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {
      path: '/mycart',
      element: <MyCart></MyCart>
    },
    {
      path: '/apple',
      element: <Apple></Apple>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/apple')
    },

    {
      path: '/lg',
      element: <Lg></Lg>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/lg')
    },
    {
      path: '/infinix',
      element: <Infinix></Infinix>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/infinix')
    },
    {
      path: '/oppo',
      element: <Oppo></Oppo>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/oppo')
    },
    {
      path: '/samsung',
      element: <Samsung></Samsung>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/samsung')
    },
    {
      path: '/sony',
      element: <Sony></Sony>,
      loader: () => fetch('https://brandshop-backens-folder.vercel.app/brands/sony')
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
