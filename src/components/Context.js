import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export const contextapi = createContext();
const Context = ({ children }) => {
    let name = "portal"
  useEffect(() => {
    fetchQuestion();
  }, []);
  let questions = [];
  const fetchQuestion = async () => {
    let { data } = await axios.get(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );
    let length = data.results.length;
    
    console.log(length);
    for(let i = 0;i < length;i++){
        questions.push(data.results[i].question)
    }
    console.log(questions);
  };
  return (
    <contextapi.Provider value={{ questions,name }}>{children}</contextapi.Provider>
  );
};

export default Context;
