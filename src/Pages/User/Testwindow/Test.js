import React, { useState,createContext, useLayoutEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios, { Axios } from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
const Test = () => {
  // function modalalert(res)
  // {
  //   console.log(res);
  //   if(res===true){
  //     <Modal/>
  //   }
  //   else{
      
  //   }
     
  // }
 const [choice,setChoice] = useState("SQL");
 const [testques, setTestques] = useState(['']);
 const [showques,setShowques]= useState("1");
 const [testoptions,setTestOptions] = useState([""]);

 useLayoutEffect(()=>
 {
     choiceques();
    //  setTestOptions(testques[showques-1].options);  


 },[choice]);

 const url = `https://csiportal.herokuapp.com/question/${choice}`;
  const choiceques = (choice) => {
    axios
        .get(
         url
        )
        .then((res) => {
     setTestques(res.data)

          // setTestOptions(testques[showques-1].options);   
          console.log(typeof(res.data))
        })
        .catch((err)=>{
          console.log(err)
        });
  }



  return (
    <div className="test_body" >     
      <QuestionPannel testoptions={testoptions} setTestOptions={setTestOptions} setShowques={setShowques} showques={showques} testques={testques} setChoice={setChoice} choice={choice}/>
      <Sidebar  setShowques={setShowques} testques={testques} choice={choice}/>
    </div>
  );
};

export default Test;