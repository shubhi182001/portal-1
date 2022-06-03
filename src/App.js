import React, { Component }  from 'react';
import './App.css';
import Feedback from './Pages/User/Feedback/Feedback';
import Login from './Pages/User/Login/Login';
import Admin from './Pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      {/* <Feedback/> */}
      <Admin/>
    </div>
  );
}

export default App;