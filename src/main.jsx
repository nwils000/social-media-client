import React, { useReducer, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// project styles
import 'bootstrap/dist/css/bootstrap.min.css';
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
    ],
  },
]);

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
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
