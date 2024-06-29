import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import Project from "../pages/Project/Project/Project";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element:<Home/> },
        { path: "/contactUs", element: <ContactUs /> },
        { path: "/proejct", element: <Project /> },
        // { path: "/registration", element: <Registration /> },
      ],
    },

  ]);
  
  export default router;