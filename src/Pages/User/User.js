import './User.css';
import React from 'react';
import Feedback from './Feedback/Feedback';
import Login from './Login/Login';
import Instructions from './Instruction/Instruction'
import Thankyou from './Thankyoupage/Thankyou';
import Confirmation from './Confirmationpage/Confirmation';
function App() {
  return (
    <div className="App">
  {  /*  <Confirmation /> */ }
      {  /*  <Feedback /> */ }
      {/* <Thankyou/> */}
       <Login/>       
      {/* <Instructions/>  */}
    </div>
  );
}

export default App;