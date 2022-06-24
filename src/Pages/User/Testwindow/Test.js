import React, { useState, createContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = () => {

  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState("HTML");
  const [testques, setTestques] = useState([""]);
  const [showques, setShowques] = useState("1");
  const [testoptions, setTestOptions] = useState([""]);

  useEffect(() => {
    choiceques();
  }, [choice]);

  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = (choice) => {
    axios
      .get(url)
      .then((res) => {
        // setTestques(res.data)
        // setTestOptions(testques[showques-1].options);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return(
    <>
 {show ? <Modal/>
  : <div className="test_body" Provider>
  <QuestionPannel
    testoptions={testoptions}
    setTestOptions={setTestOptions}
    setShowques={setShowques}
    showques={showques}
    testques={testques}
    setChoice={setChoice}
    choice={choice}
  />
  <Sidebar
    setShowques={setShowques}
    testques={testques}
    choice={choice}
    setShow = {setShow}
  />
</div>}
    </>
 
  )
 
};

export default Test;
