import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
    ]
  },
]);

export default router;
