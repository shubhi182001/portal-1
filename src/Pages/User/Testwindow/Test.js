import React from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import './Test.css'
const Test = () => {
  return (
    <div className="test_body">
      <QuestionPannel />
      <Sidebar />
    </div>
  );
};

export default Test;
