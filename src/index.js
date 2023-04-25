import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Crew from "../src/Pages/Crew";
import Home from "../src/Pages/Home";
import Destination from "../src/Pages/Destination";
import Technology from "../src/Pages/Technology";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },

 

  {
  
    path: "Home",
    element: <Home />,
  },

  {
  
    path: "Crew",
    element: <Crew />,
  },

  {
    path: "Technology",
    element: <Technology />,
  },

  {
    path: "Destination",
    element: <Destination />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
