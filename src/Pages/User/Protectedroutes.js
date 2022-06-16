import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login1 = localStorage.getItem('login1');
    let login2 = localStorage.getItem('login2');
    let instruct = localStorage.getItem('instruct');
    let feedback = localStorage.getItem('feedback');
    if(!login1 && !login2){
       navigate('/')
    }
    else if(!instruct){
        navigate('/instructions')
    }
    else if(!feedback){
        navigate('/feedback')
    }
    else{
        navigate('/testwindow')
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protectedroutes;
