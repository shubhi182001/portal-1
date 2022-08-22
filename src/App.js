import "./App.css";
import React from "react";
import User from "./Pages/User/User";
import { ToastContainer, toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  toast.error("Sorry, won't open in phones");
  return (
    window.innerWidth > "820" ? <User /> : <div className="mobile_view"> <ToastContainer/></div> 
      
  );
}

export default App;
