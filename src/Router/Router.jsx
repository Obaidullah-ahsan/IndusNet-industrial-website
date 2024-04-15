import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About us/About";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://obaidullah-ahsan.github.io/b9a9-jasondata/new.json"),
      },
      {
        path: "/service/:id",
        element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
        loader: () =>
          fetch("https://obaidullah-ahsan.github.io/b9a9-jasondata/new.json"),
      },
      {
        path: "/about",
        element: <PrivateRoutes><About></About></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
