import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorElement from "../pages/ErrorElement";
import Home from "../components/home/Home";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement : <ErrorElement></ErrorElement>,
      children : [
        {
            path: '/',
            element : <Home></Home>
        }
      ]
    },
  ]);