/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clothes from "./components/Category/Clothes.jsx";
import Display from "./components/Category/Display.jsx";
import Electronics from "./components/Category/Electronics.jsx";
import Furnitures from "./components/Category/Furnitures.jsx";
import Toys from "./components/Category/Toys.jsx";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ProductsDetails from "./components/Cart/ProductsDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Payment from "./components/Cart/Payment.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Display />,
      },
      {
        path: "/clothes",
        element: <Clothes />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/furnitures",
        element: <Furnitures />,
      },
      {
        path: "/toys",
        element: <Toys />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
