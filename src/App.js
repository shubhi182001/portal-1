import './App.css';
import React from 'react';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Test from './Pages/User/Testwindow/Test'


function App() {
  return (
    <div className="App">
      <User/>
      <Admin/>
      {/* <Test /> */}
    </div>
  );
}

export default App;