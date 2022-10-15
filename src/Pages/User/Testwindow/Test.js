import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
import { useStateContext } from "../../../Components/ContextProvider";

const Test = () => {
  const [show, setShow] = useState(false); // for modal
  const [choice, setChoice] = useState("HTML"); // cataegory
  const [testques, setTestques] = useState({}); // setting whole array of question
  const [showques, setShowques] = useState(1); // question iterator
  const [testoptions, setTestOptions] = useState(); //setting the options
  const cookie = localStorage.getItem("cookie");
  const { setLoader } = useStateContext();

  const url = `${process.env.REACT_APP_URL}/question/user-answers/${choice}`;
  const categoryquestion = () => {
    setLoader(false);
    axios
      .put(url, {
        cookie_token: cookie,
      })
      .then((data) => {
        // console.log(data);
        setTestques(data.data);
        setTestOptions(data.data[showques - 1].options);
        setLoader(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const question = () => {
    axios
      .put(url, {
        cookie_token: cookie,
      })
      .then((data) => {
        // console.log(data);
        setTestques(data.data);
        setTestOptions(data.data[showques - 1].options);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    categoryquestion();
    // console.log(testques);

    // eslint-disable-next-line
  }, [choice]);

  useEffect(() => {
    setTimeout(() => {
      question();
    }, 600);
    // eslint-disable-next-line
  }, [showques]);
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
