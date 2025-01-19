import React from "react";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./page/Products";
import About from "./page/About";
import Contact from "./page/Contact";
import Special from "./page/Special";
import Testimonials from "./page/Testimonials";
import Blog from "./page/Blog";
import Wishlist from "./page/Wishlist";
import Basket from "./page/Basket";
import Layout from "./components/layout/Layout";
import Admin from "./page/Admin";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/special",
          element: <Special />,
        },
        {
          path: "/testimonials",
          element: <Testimonials />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
