import React from 'react'
import {Home, Layout, AboutUs, ContactUs, NotFound, LoginForm, SignUp} from './components/Index.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"*",
        element:<NotFound/>
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignUp />,


      },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App