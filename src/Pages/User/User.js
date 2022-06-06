import './User.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login/Login';
import Instructions from './Instruction/Instruction'
// import Confirmation from './Confirmationpage/Confirmation';
import Feedback from './Feedback/Feedback';
import Thankyou from './Thankyoupage/Thankyou';
function App() {
  return (   
    <BrowserRouter>    
    <Routes>
      <Route path ='/' element={<Login/>} />
      <Route path ='/instructions' element={<Instructions/>} />
      <Route path ='/feedback' element={<Feedback/>} />
      <Route path='/thankyou' element={<Thankyou/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;