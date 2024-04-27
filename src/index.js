import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Browser Router ne apde add karishu
  // Toaster ne add karvu hoy to apde ahiya <BrowserRouter></BrowserRouter> ni ander aa <Toaster></Toaster> ne add karvu pade che 
 <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
    

);
