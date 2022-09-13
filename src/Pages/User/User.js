import "./User.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Instructions from "./Instruction/Instruction";
import Feedback from "./Feedback/Feedback";
import Thankyou from "./Thankyoupage/Thankyou";
import TestWindow from "./Testwindow/Test";
import Protectedroutes from "./Protectedroutes";
import Animation from "../../Animation/Animation";
import Homepage from "../../Pages/Admin/homepage/Homepage";
import GetQ from "../Admin/Get/GetQuestions/GetQ";
import EditQ from "../Admin/editQ/EditQ";
import Editf from "../Admin/Get/GetFeedback/components/Editf";
import GetCandidate from "../Admin/Get/GetCandidate/GetCandidate";
import AddQuestions from "../Admin/add/addQuestions/AddQuestions";
import AddFeedback from "../Admin/add/addFeedbackQ/AddFeedback";
import AddCandidate from "../Admin/add/addCandidate/AddCandidate";
import Leaderboard from "../Admin/leaderboard/Leaderboard";
import Responses from "../Admin/leaderboard/Responses";
import Getfeedback from "../Admin/Get/GetFeedback/Getfeedback";
import Error from "../../Error/Error";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 4000);

    // eslint-disable-next-line
  }, []);
  

  useEffect(() => {
    setInterval(() => {
      setShowComponent2(!showComponent2);
    }, 2000);

    // eslint-disable-next-line
  }, []);
  const login1 = localStorage.getItem("login1");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {showComponent && <Route path="/" element={<Animation />} />}
          {showComponent2 && <Route path="/" element={<Login />} />}
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
          {login1 ? (
            <>
              <Route path="/getques" element={<GetQ />} />
              <Route path="/editq" element={<EditQ />} />
              <Route path="/getfeedbackques" element={<Getfeedback />} />
              <Route path="/editf" element={<Editf />} />
              <Route path="/getcandidate" element={<GetCandidate />} />
              <Route path="/addques" element={<AddQuestions />} />
              <Route path="/addfeedbackques" element={<AddFeedback />} />
              <Route path="/addcandidate" element={<AddCandidate />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/responses" element={<Responses />} />
            </>
          ) : (
            " "
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
