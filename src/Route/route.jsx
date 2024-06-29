import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element:<Home/> },
        // { path: "/login", element: <Login /> },
        // { path: "/registration", element: <Registration /> },
      ],
    },

  ]);
  
  export default router;