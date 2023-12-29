import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from "./components/dashbord/Dashboard";
import OfferLetter from "./components/application-from/offer-letter/OfferLetter";
import App from "./App";
import Error from "./components/error/Error";
import InitalComponent from "./components/share/InitialContractShare/InitalComponent";
import InitialContract from "./components/application-from/initial-contract/InitialContract";
import FingerPrint from "./components/application-from/finger-print/FingerPrint";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/offerLetter',
        element:<OfferLetter/>
      },
      {
        path:'/InitialContract',
        element:<InitialContract/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);