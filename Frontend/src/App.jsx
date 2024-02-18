import { useState } from 'react'
import { Home, Layout, AboutUs, ContactUs, NotFound, LoginForm, SignUp, ProfileDetails, EditProfile, Blog, Post, AllPosts } from './components/Index.js'

import {ProtectedRoute} from './utils/ProtectedRoute.jsx';
import { LoginContext } from './context/LoginContext.js';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'


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
        path: "*",
        element: <NotFound />
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
      {
        path: "/profile-details",
        element: <ProfileDetails />,
      },
      {
        path: "/edit-profile",
        element: (
          <ProtectedRoute allowedRoles={['user']}>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/post",
        element: <Post />
      },
      {
        path: "/all-posts",
        element: <AllPosts />
      }
    ],
  },
]);
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("token") ? true : false);

  return (
    <ChakraProvider>

      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <RouterProvider router={router} />
      </LoginContext.Provider>

    </ChakraProvider>
  )
}

export default App