import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    // let login = localStorage.getItem('login');
    // let instruct = localStorage.getItem('instruct');
    // let feedback = localStorage.getItem('feedback');
    // if(!login){
    //    navigate('/')
    // }
    // else if(!instruct){
    //     navigate('/instructions')
    // }
    // else if(!feedback){
    //     navigate('/feedback')
    // }
    // else{
    //     navigate('/testwindow')
    // }
    navigate("/instructions");
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protectedroutes;
