import { useState } from 'react'
<<<<<<< HEAD
import { Home, Layout, AboutUs, ContactUs, NotFound, LoginForm, SignUp, ProfileDetails, EditProfile, Blog, Post, AllPosts, Feed} from './components/Index.js'
import { LoginContext } from './context/LoginContext.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
=======
import { Home, Layout, AboutUs, ContactUs, NotFound, LoginForm, SignUp, ProfileDetails, EditProfile, Blog, Post, AllPosts, Feed, StartupProfile, EditStartUpProfile } from './components/Index.js'

import { ProtectedRoute } from './utils/ProtectedRoute.jsx';
import { PublicRoute } from './utils/PublicRoute.jsx';

import { LoginContext } from './context/LoginContext.js';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
>>>>>>> 9d9395c56a7a0f362beaea33d000703667230f20
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
        element: (
          <PublicRoute>
            <LoginForm />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
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
      },
      {
        path: "/feed",
        element: <Feed />
      },
      // {
      //   path: "/startup-profile",
      //   element: (
      //     <ProtectedRoute allowedRoles={['startup']}>
      //      <StartupProfile />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/startup-profile",
        element: <StartupProfile />
      },
      // {
      //   path: "/edit-startup-profile",
      //   element: (
      //     <ProtectedRoute allowedRoles={['startup']}>
      //      <EditStartUpProfile />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/edit-startup-profile",
        element: <EditStartUpProfile />
      },

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