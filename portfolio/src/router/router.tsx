import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Work from "../pages/Work";
import ErrorComponent from "../components/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/work/:cate",
        element: <Work />,
      },
    ],
  },
]);
export default router;
