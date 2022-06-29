import React, { useState, createContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = ({chosenlang}) => {
  const [show, setShow] = useState(false);//for modal
  const [choice, setChoice] = useState("HTML"); // for cataegory
  const [testques, setTestques] = useState([""]); // for storing whole 
  const [showques, setShowques] = useState("1"); // for question
  const [testoptions, setTestOptions] = useState([""]); // array  for option

  useEffect(() => {
    choiceques();
  }, [choice]);

  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = () => {
    axios
      .get(url)
      .then((res) => {
        setTestques(res.data.result);
        // console.log(testques)
        // setTestOptions(testques[showques-1].options);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {show ? (
        <Modal />
      ) : (
        <div className="test_body">
          <QuestionPannel
          chosenlang={chosenlang}
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
            setShow={setShow}
          />
        </div>
      )}
    </>
  );
};

export default Test;
