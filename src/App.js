import "./App.css";
import React from "react";
import User from "./Pages/User/User";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    window.innerWidth > "820" ? <User /> : <h1 className="mobile_view">use desktop!!!!</h1>

      
  );
}

export default App;
