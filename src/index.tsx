import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Certificates from './pages/Certificates';

import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/Akash-Kumar/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/my-resume",
    element: <Resume />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/my-projects/:id",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Akash-Kumar/certificates",
    element: <Certificates />,
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

