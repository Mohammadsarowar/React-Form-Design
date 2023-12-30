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

import InitialContract from "./components/application-from/initial-contract/InitialContract";
import FingerPrint from "./components/application-from/finger-print/FingerPrint";
import Home from "./components/Home/Home";
import TransferQiwa from "./components/application-from/transferQiwa/TransferQiwa";
import TransferNaqalkafala from "./components/application-from/transferNaqalkafala/TransferNaqalkafala";
import TransferMuqeemTab from "./components/application-from/transferMuqeemTab/TransferMuqeemTab";
import PrintIqama from "./components/application-from/printIqama/PrintIqama";
import Karar from "./components/application-from/karar/Karar";

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
        path:'/initialContract',
        element:<InitialContract/>
      },
      {
        path:'/fingerPrint',
        element:<FingerPrint/>
      },
      {
        path:'/transferQiwa',
        element:<TransferQiwa/>
      },
      {
        path:'/transferNaqalkafala',
        element:<TransferNaqalkafala/>
      },
      {
        path:"transferMuqeemTab",
        element:<TransferMuqeemTab/>
      },
      {
        path:'printIqama',
        element:<PrintIqama/>
      },
      {
        path:'karar',
        element:<Karar/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);