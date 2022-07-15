import React, {
  useState,
  createContext,
  useEffect,
  useLayoutEffect,
} from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = ({ chosenlang }) => {
  const [show, setShow] = useState(false); // for modal
  const [choice, setChoice] = useState("HTML"); // cataegory
  const [testques, setTestques] = useState([""]); // setting whole array of question
  const [showques, setShowques] = useState(1); // question iterator
  const [testoptions, setTestOptions] = useState(); //setting the options
  const [ansid, setAnsid] = useState("2"); //flags for question :
  // save and next -> 1
  //Review -> 3
  // Not visited -> 2
  let data;
  useEffect(() => {
    choiceques();
  }, [choice]);

  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = async () => {
    data = await axios.get(url);
    setTestques(data.data.result);
    setTestOptions(data.data.result[showques - 1].options);
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
            choice={choice}
            setChoice={setChoice}
            setAnsid={setAnsid}
            ansid={ansid}
          />
          <Sidebar
            showques={showques}
            setShowques={setShowques}
            testques={testques}
            choice={choice}
            setShow={setShow}
            ansid={ansid}
          />
        </div>
      )}
    </>
  );
};

export default Test;
