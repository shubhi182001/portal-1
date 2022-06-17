import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export const contextapi = createContext();
const Context = ({ children }) => {
  useEffect(() => {
    fetchQuestion();
  }, []);
  let questions = [],random_questions=[];
  const fetchQuestion = async () => {
    let  data  = await axios.get(
      `https://csiportal.herokuapp.com/question/seequestion`
    );
    console.log(data)
    let panel = data.data
    for(let i = 0;i < random_questions.length; i++)
    {
     questions.push(random_questions[i].question);

    }
  

  }
  return (
    <contextapi.Provider value={{ questions ,random_questions}}>{children}</contextapi.Provider>
  );
};

export default Context;
