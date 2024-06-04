import React, { useReducer, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// project styles
import './styles/index.css';

import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import {
  initialProfileState,
  profileReducer,
} from './reducers/profile-reducer';
import { AuthContext } from './context';
import { CreatePostContext } from './context';
import Profile from './components/Profile';

function Layout() {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <div id="page-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/feed',
        element: <Feed />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

const CreatePostContextProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState('none');

  return (
    <CreatePostContext.Provider
      value={{ modalDisplay: modalDisplay, setModalDisplay: setModalDisplay }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialProfileState);

  const auth = {
    state,
    dispatch,
  };

  return (
    <AuthContext.Provider value={{ auth: auth }}>
      {children}
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <CreatePostContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </CreatePostContextProvider>
);
