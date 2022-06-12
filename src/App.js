import './App.css';
import React from 'react';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Test from './Pages/User/Testwindow/Test'
import Login from './Pages/User/Login/Login'



function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <User/>
      {/* <Admin/> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;