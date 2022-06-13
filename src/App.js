import './App.css';
import React from 'react';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Test from './Pages/User/Testwindow/Test'
import Login from './Pages/User/Login/Login'

import Modal from './Pages/User/Modal/Modal';
import Responses from './Pages/Admin/leaderboard/Responses';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <User/> */}
      {/* <Modal/> */}
      <Admin/>
      {/* <Test /> */}
      {/* <Responses/> */}
    </div>
  );
}

export default App;