import React, { createContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionPannel from "./components/QuestionPannel";
import axios from "axios";
import Modal from "./.././Modal/Modal";
import "./Test.css";
import { useState } from "react";
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
 
  return (
    <div className="test_body" Provider>
      
      <QuestionPannel  />
      <Sidebar  />
    </div>
  );
};

export default Test;
