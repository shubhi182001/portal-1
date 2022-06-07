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
import TestWindow from './Testwindow/Test';
import Protectedroutes from './Protectedroutes';

function App() {
  return (   
    <BrowserRouter>    
    <Routes>
      <Route path ='/' element={<Login/>} />
      <Route path ='/testwindow' element={<Protectedroutes Component ={TestWindow}/>} />
      <Route path ='/instructions' element={<Protectedroutes Component ={Instructions}/>} />
      <Route path ='/feedback' element={<Protectedroutes Component ={Feedback}/>} />
      <Route path='/thankyou' element={<Protectedroutes Component ={Thankyou}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;