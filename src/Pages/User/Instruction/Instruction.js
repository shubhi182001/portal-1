import React, {useEffect,useState} from "react"; 
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import whitelogo from "../../../Images/User/csiwhitelogo.svg"
import backgroundInst from "../../../Images/User/background.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Instruction.css";
import { useNavigate } from "react-router-dom";
// import { ColorizeRounded } from "@mui/icons-material";
import axios from "axios";


const Instruction = () => {
  
  const cook= localStorage.getItem('cookie')
  const [chosenlang, setChosenlang] = useState("");
  console.log(chosenlang);
  // console.log(cook);

  const chkvalidate = async(e) =>{
    e.preventDefault();
    // const appear=localStorage.getItem('Appeared');
    
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
          // localStorage.setItem('Appeared',false);      

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
       <img className="bginst" src={backgroundInst} alt="logoimg" />
      <div className="inst_container">
        <div className="nav_inst">
        <h1>Instructions</h1>
        <img className="instcsilogo" src={whitelogo} alt="logoimg" />
        </div>
        <div className="ins">
          <ol>
        <li>This exam contains 4 mandatory categories: HTML, CSS, APTITUDE, and SQL. </li>
        <li>However, the candidate can select a choice of language(category)
        from the dropdown below. </li>
        <li>This exam will be of 60 minutes in duration.
        When you submit the test/run out of time all your marked responses
        whether saved or not will be submitted.</li>
        <li>For every correct answer, the
        candidate will be awarded 1 mark.</li>
        <li>For every question, you can either
        SAVE or MARK FOR REVIEW for the response.</li>
        <li>A question once attempted
        cannot be left unanswered as there is  NO NEGATIVE MARKING in this test.</li>
        <li>You can end the test anytime by clicking on the submit button. Make
        sure you submit only when you are done.</li>
        <li>Once done submitting the test
        you'll be redirected to a feedback form. Your participation will only be
        considered once you submit your feedback. </li>
        <li>If the candidate tries to
        do any malicious activity, he/she shall be automatically disqualified.</li>
        <li>Before starting the test please make sure you have a stable internet
        connection.</li> 
        <li>Kindly take note that this test allows only a single
        login for a user, so any kind of disconnection or reloading of the page
        might log you out of the test.</li>
        </ol>
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