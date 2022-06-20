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
 const [showques,setShowques]= useState("1");
 
 useEffect(()=>
 {
     choiceques();
 },[choice]);

 const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = (choice) => {
    axios
        .get(
         url
        )
        .then((res) => {
          setTestques(res.data)
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        });
  }

  return (
    <div className="test_body" Provider>     
      <QuestionPannel setShowques={setShowques} showques={showques} testques={testques} setChoice={setChoice} choice={choice}/>
      <Sidebar setShowques={setShowques} testques={testques} choice={choice}/>
    </div>
  );
};

export default Test;
