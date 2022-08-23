import "./App.css";
import React from "react";
import User from "./Pages/User/User";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileError from "./Error/MobileError";

function App() {
  return window.innerWidth > "1000" ? <User /> : <MobileError />;
}

export default App;
