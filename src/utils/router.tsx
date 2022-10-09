import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../screens/Home";
import Orders from "../screens/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => fetch("data/tshirts.json"),
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;
