import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './pages/form'
import App from './App';
import Login from './pages/login'
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "form",
    element: <Form/>,
  },
  
  {
    path: "login",
    element: <Login/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
reportWebVitals();