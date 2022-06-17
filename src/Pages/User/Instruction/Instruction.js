import React, {useEffect,useState} from "react"; 
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import instlogo from "../../../Images/User/inst_csilogo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Instruction.css";
import { useNavigate } from "react-router-dom";
import { ColorizeRounded } from "@mui/icons-material";
import axios from "axios";


const Instruction = () => {
  
  const cook= localStorage.getItem('cookie')
  const [chosenlang, setChosenlang] = useState("");
  console.log(chosenlang);
  // console.log(cook);

  const chkvalidate = async(e) =>{
    e.preventDefault();
    await axios
        .patch(
          "https://csiportal.herokuapp.com/instruction",
                
              {
              cookie_token:cook,
              lang :chosenlang,
              },
              
              
            
        )
        .then((res) => {
          console.log(res.data);
        }).catch((err)=>{
          console.log(err)
        });
    if(chosenlang === ""){
      toast.error("Select any language first");
    }
    else{
    localStorage.setItem('instruct', true);

    navigate('/testwindow')
    }

    
  }
  const navigate = useNavigate();
  useEffect(()=>
    {
      
        let instruct = localStorage.getItem('instruct');
  
        if(instruct){
           navigate('/testwindow')
        }
        
    },[]);

  return (
    <div className="instructions">
      <div className="inst_container">
        <div className="nav_inst">
        <h1>Instructions</h1>
        <img className="instcsilogo" src={instlogo} alt="logoimg" />
        </div>
        <div className="ins">
        <h2>1.This exam contains 4 mandatory categories: HTML, CSS, APTITUDE, and SQL. </h2>
        <h2>2. However, the candidate can select a choice of language(category)
        from the dropdown below. </h2>
        <h2> 3. This exam will be of 60 minutes in duration.
        When you submit the test/run out of time all your marked responses
        whether saved or not will be submitted.</h2>
        <h2> 4. For every correct answer, the
        candidate will be awarded 1 mark.</h2>
        <h2> 5. For every question, you can either
        SAVE or MARK FOR REVIEW for the response.</h2>
        <h2> 6. A question once attempted
        cannot be left unanswered as there is <b> NO NEGATIVE MARKING</b> in this test.</h2>
        <h2>7. You can end the test anytime by clicking on the submit button. Make
        sure you submit only when you are done.</h2>
        <h2> 8. Once done submitting the test
        you'll be redirected to a feedback form. Your participation will only be
        considered once you submit your feedback. </h2>
        <h2>9.<b>If the candidate tries to
        do any malicious activity, he/she shall be automatically disqualified.</b></h2>
        <h2> 10. Before starting the test please make sure you have a stable internet
        connection.</h2> 
        <h2>11.<b>Kindly take note that this test allows only a single
        login for a user, so any kind of disconnection or reloading of the page
        might log you out of the test.</b></h2>
        </div>
       </div>
      <div className="lang_selection">
          <div className="lang">
          <select className="select" defaultValue={"DEFAULT"}style={{color:"white"}} onChange={e => setChosenlang(e.target.value)} name="lang" id="options" >
               <option value="DEFAULT"  disabled hidden>Language</option>
               <option value="C"style={{color:"black",backgroundColor:"#F6FCFF"}}>C</option>
               <option value="C++"style={{color:"black",backgroundColor:"#F6FCFF"}}>C++</option>
               <option value="Java"style={{color:"black",backgroundColor:"#F6FCFF"}}>Java</option>
               <option value="Python"style={{color:"black",backgroundColor:"#F6FCFF"}}>Python</option>
          </select>
          </div>
          <div className="start_exam">
          <Button  onClick={chkvalidate} endIcon={<ArrowForwardIcon/>} sx={{fontSize:20,width:250,marginBottom:5, height:50}} color="success" variant='contained'>Save & Next</Button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Instruction;