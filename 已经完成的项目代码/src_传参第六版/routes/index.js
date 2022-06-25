import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import School from "../pages/School";
import News from "../pages/News";
import Message from "../pages/Message/Message";
import Detile from "../pages/Message/Detile/Detile";
export default [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/school",
    element: <School />,
    children: [
      { path: "news", element: <News /> },
      {
        path: "message",
        element: <Message />,
        children:[
            {path: "detile/:id", element: <Detile /> }
        ]
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/school" />,
  },
];
