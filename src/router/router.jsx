import { createBrowserRouter } from "react-router";
import MainLayouts from "./../layouts/MainLayouts";
import HomePage from "../pages/Home/Home/HomePage";
import Services from "../pages/Services/Services";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
