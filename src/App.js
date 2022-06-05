import './App.css';
import React from 'react';
import Feedback from './Pages/User/Feedback/Feedback';
import Login from './Pages/User/Login/Login';
import Admin from './Pages/Admin/Admin';
import Instructions from './Pages/User/Instruction/Instruction'
function App() {
  return (
    <div className="App">
      {/* <Feedback /> */}
      {/* <Login/> */}
      <Admin/>
      {/* <Instructions/> */}
    </div>
  );
}

export default App;