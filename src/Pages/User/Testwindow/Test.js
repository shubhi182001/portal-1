import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = () => {
  const [show, setShow] = useState(false); // for modal
  const [choice, setChoice] = useState("HTML"); // cataegory
  const [testques, setTestques] = useState({}); // setting whole array of question
  const [showques, setShowques] = useState(1); // question iterator
  const [testoptions, setTestOptions] = useState(); //setting the options
  const cook = localStorage.getItem("cookie");
  const [loader, setLoader] = useState(true); // setting whole array of question

  // const [ansid, setAnsid] = useState("2"); //flags for question :
  // save and next -> 1 green
  //Review -> 3 blue
  // Not visited -> 2 border -> blue, background ->white
  // not answered -> 5 red

  const url = `https://accessfre.herokuapp.com/question/shuffle/${choice}`;
  const choiceques = async () => {
    const data = await axios.put(url, {
      cookie_token: cook,
    });
    console.log(data);
    setTestques(data.data.result);
    setTestOptions(data.data.result[showques - 1].quesget.options);
  };
  useEffect(() => {
    choiceques();

    // eslint-disable-next-line
  }, [showques]);
  useEffect(() => {
    setLoader(false);
    choiceques();

    // eslint-disable-next-line
  }, [choice]);

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
              loader={loader}
            />

            <Sidebar
              showques={showques}
              setShowques={setShowques}
              testques={testques}
              choice={choice}
              setShow={setShow}
              show={show}
              loader={loader}
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
