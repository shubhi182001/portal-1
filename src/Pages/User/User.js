import "./User.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Instructions from "./Instruction/Instruction";
// import Confirmation from './Confirmationpage/Confirmation';
import Feedback from "./Feedback/Feedback";
import Thankyou from "./Thankyoupage/Thankyou";
import TestWindow from "./Testwindow/Test";
import Protectedroutes from "./Protectedroutes";
import Animation from "../../Animation/Animation";
import Homepage from "../../Pages/Admin/homepage/Homepage";

import Test from "./Testwindow/Test";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 4000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setShowComponent2(!showComponent2);
    }, 4000);
  }, []);

  return (
    <>
      {/* {<Feedback/> }  */}

      <BrowserRouter>
        <Routes>
          {showComponent && <Route path="/" element={<Animation />} />}
          {showComponent2 && <Route path="/" element={<Login />} />}
          {/* <Route path ='/testwindow'   Component ={TestWindow} /> */}
          <Route
            path="/homepage"
            element={<Protectedroutes Component={Homepage} />}
          />
          <Route
            path="/instructions"
            element={<Protectedroutes Component={Instructions} />}
          />
          <Route
            path="/testwindow"
            element={<Protectedroutes Component={TestWindow} />}
          />
          <Route
            path="/feedback"
            element={<Protectedroutes Component={Feedback} />}
          />
          <Route
            path="/thankyou"
            element={<Protectedroutes Component={Thankyou} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
