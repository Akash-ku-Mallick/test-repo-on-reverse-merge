import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Admin from './pages/Admin';
import Working from './pages/Working';
import { Members } from './pages/Members'
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/Akash-Kumar/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/Admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/Working",
    element: <Working />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/Members",
    element: <Members />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

