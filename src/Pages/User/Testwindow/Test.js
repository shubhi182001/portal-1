import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = () => {
  const [show, setShow] = useState(false); // for modal
  const [choice, setChoice] = useState("HTML"); // cataegory
  const [testques, setTestques] = useState([""]); // setting whole array of question
  const [showques, setShowques] = useState(1); // question iterator
  const [testoptions, setTestOptions] = useState(); //setting the options
  const [ansid, setAnsid] = useState("2"); //flags for question :
  // save and next -> 1 green
  //Review -> 3 blue
  // Not visited -> 2 border -> blue, background ->white
  // not answered -> 5 red

  useEffect(() => {
    choiceques();
  }, [choice, showques]);

  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = async () => {
    const data = await axios.get(url);
    // console.log(data);
    setTestques(data.data.result);
    setTestOptions(data.data.result[showques - 1].options);
  };

  return (
    <>
      {show ? (
        <>
          <div className="test_body">
            <QuestionPannel
              testoptions={testoptions}
              setTestOptions={setTestOptions}
              setShowques={setShowques}
              showques={showques}
              testques={testques}
              choice={choice}
              setChoice={setChoice}
              setShow={setShow}
              show={show}
              setTestques={setTestques}
            />

            <Sidebar
              showques={showques}
              setShowques={setShowques}
              testques={testques}
              choice={choice}
              setShow={setShow}
              show={show}
            />
            <Modal setShow={setShow} />
          </div>
        </>
      ) : (
        <div className="test_body">
          <QuestionPannel
            testoptions={testoptions}
            setShowques={setShowques}
            showques={showques}
            testques={testques}
            choice={choice}
            setChoice={setChoice}
          />
          <Sidebar
            showques={showques}
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
