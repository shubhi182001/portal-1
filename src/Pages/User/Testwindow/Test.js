import React, { useState,createContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = () => {
  function modalalert(res)
  {
    console.log(res);
    if(res===true){
      <Modal/>
    }
    else{
      
    }
     
  }
 const [choice,setChoice] = useState("HTML");
 const [testques, setTestques] = useState("");
  const choiceques = (choice) => {
    axios
        .get(
         `https://csiportal.herokuapp.com/question/HTML`
        )
        .then((res) => {
          setTestques(res.data)
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        });
  }

  useEffect(()=>
  {
      choiceques();
  },[]);

  return (
    <div className="test_body" Provider>     
      <QuestionPannel setChoice={setChoice} choice={choice}/>
      <Sidebar testques={testques} choice={choice}/>
    </div>
  );
};

export default Test;
