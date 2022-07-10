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
const Test = () => {
  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState("HTML");
  const [testques, setTestques] = useState(['']);
  const [showques, setShowques] = useState(1);

  // const [showques, setShowques] = useState('1'); string
  const [testoptions, setTestOptions] = useState();
let data;
  useEffect(() => {
    choiceques();

  }, [choice]);

  const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = async () => {
    data =  await axios
      .get(url)
      // .then((res) => {
        
      //   // console.log(res);
      //   // console.log(testoptions.length);
      // }
      // )
      // .catch((err) => {
      //   console.log(err);
      // });
     console.log(data.data.result);
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
            testoptions={testoptions}
            setTestOptions={setTestOptions}
            setShowques={setShowques}
            showques={showques}
            testques={testques}
            setChoice={setChoice}
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
