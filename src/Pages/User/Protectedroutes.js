import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protectedroutes = (props) => {
    const {Component} = props;
    const navigate= useNavigate();
    useEffect(()=>
    {
        let login = localStorage.getItem('login');
        let instruct = localStorage.getItem('instruct');
        if(!login){
           navigate('/')
        }
        else if(!instruct){
            navigate('/instructions')
        }
    
    },[])
  return (
    <div>
        <Component />
    </div>
  )
}

export default Protectedroutes