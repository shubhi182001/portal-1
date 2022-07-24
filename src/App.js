
import './App.css';
import React from 'react';
import User from './Pages/User/User';
import Admin from './Pages/Admin/Admin';
import Test from './Pages/User/Testwindow/Test'
import Login from './Pages/User/Login/Login'

import Modal from './Pages/User/Modal/Modal';
import Responses from './Pages/Admin/leaderboard/Responses';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // localStorage.setItem('login1',false);
  // localStorage.setItem('login2',true);

  // const user = localStorage.getItem('login2');
  // const admin = localStorage.getItem('login1');
  // if (user && !admin )
  // {
   
  //   return (
  //     <div className="App">
  //       {/* < Login/> */}
  //        <User/>
  //       {/* <Modal/> */}
  //       {/* <Admin/> */}
  //       {/* <Test /> */}
  //       {/* <Responses/> */}
  //     </div>
  //   );
  // }
  // else if(!user && admin)
  // {
  //   return (
  //     <div className="App">
  //       {/* < Login/> */}
  //        {/* <User/> */}
  //       {/* <Modal/> */}
  //       <Admin/>
  //       {/* <Test /> */}
  //       {/* <Responses/> */}
  //     </div>
  //   );
  // }
  return (
        <div className="App">
          {/* < Login/> */}
           <User/>
          {/* <Modal/> */}
          <Admin/>
          {/* <Test /> */}
          {/* <Responses/> */}
        </div>
      );
}

export default App;