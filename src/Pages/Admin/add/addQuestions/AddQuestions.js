import React, { useEffect, useState } from 'react'
import './addquestions.css'
import axios from "axios";
import Navbar from '../../navbar/Navbar'
// import { Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import $ from 'jquery' 





const AddQuestions = () => {
    const [inputText, setInputText] = useState('');
    const [options, setOptions] = useState([]);
    const [chosenlang, setChosenlang] = useState("");
    const [question, setQuestion] = useState("");
    const [questionerrors, setQuestionErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [categoryerrors, setCategoryErrors] = useState({});

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setOptions(
            [...options, { value: inputText, Oid: Math.floor(Math.random() * 1000), isCorrect: false }]
        );
        setInputText('');
    }

    const handleLanguage = (e) => {
        e.preventDefault();
        setChosenlang(e.target.value)
    }

    const handleDelete = (({Oid})=>{
        setOptions(options.filter((option)=>
          option.Oid !== Oid
        ))
      })

    

    const handleQuestion = (e) => {
        e.preventDefault();
        let str = e.target.value;
        setQuestion(str);
    }

    function check(){
        const fields = $(`input[name='opt']`).serializeArray();
        if (fields.length === 0) {
          console.log('nothing selected');
          return false;
        } else {
          console.log(fields.length, "items selected");
        }
        return true;
    }

    const handleUpload = (e) => {
        e.preventDefault();
        setQuestionErrors(validateQuestion(question))
        setCategoryErrors(validateCategory(chosenlang))
        setIsSubmit(true)
        const questionData = {
            "question": question,
            "category": String(chosenlang),
            "options": options
        }

        console.log(questionData)
        if (questionData.question && questionData.category && options.length === 4 && check()) {
            axios.post(
                'https://csiportal.herokuapp.com/question/addquestion', questionData)
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    setQuestion('');
                    setChosenlang(' ');
                    setOptions([])
                    setQuestionErrors({})
                    setCategoryErrors({})
                    if (res) {
                        window.alert("Question Added Successfully");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            if(options.length===0){
                window.alert("Add options");
            }
            if(options.length>0 && options.length<=4){
                if(!check()){
                    window.alert("You have to select at least one correct option");
                }
            }
            if (options.length > 4) {
                window.alert("Can only add 4 options");
                
            }
            
            console.log('Add Questions validations failed')
        }
    }
    useEffect(() => {

        if (Object.keys(questionerrors).length === 0 && isSubmit && Object.keys(categoryerrors).length === 0) {
           
        } else {
            
        }

    }, [questionerrors, categoryerrors, isSubmit])

    const validateQuestion = (value) => {
        const err = {}
        if (!value) {
            err.ques = 'Question is  required'
        }
        return err;
    }

    const validateCategory = (value) => {
        const err = {}
        if (!value) {
            err.cat = 'Category is required'
        }
        return err;
    }


    const handleReset = (e) => {
        e.preventDefault();
        setQuestion('');
        setChosenlang(' ');
        setOptions([])
        setQuestionErrors({})
        setCategoryErrors({})
    }


    return (
        <>
            <div className="admin-main add-main">
                <Navbar />
                <div className='add-question-body'>
                    <h5 className='heading-question'>Add Question </h5>
                    <div className='white-container'>
                        <div className="question">
                            <p>Question</p>
                            <textarea style={{whiteSpace:'pre-wrap',overflowWrap:'break-word'}} name="ques" value={question} required id="question-here" onChange={handleQuestion}></textarea>
                            {question.length === 0 ? <p className='add-ques-error'>{questionerrors.ques}</p> : null}
                        </div>

                        <div className="dropdown">
                            <h5>Category</h5>
                            <div className="addques-lang">
                                <select className="addques-select" required value={chosenlang} style={{ color: "black", borderRadius: "4px"  }} onChange={handleLanguage} name="lang" id="options" >
                                    <option value="DEFAULT" hidden>Category</option>
                                    <option value="HTML" style={{ color: "black",backgroundColor: "#F6FCFF" }}>HTML</option>
                                    <option value="CSS" style={{ color: "black", backgroundColor: "#F6FCFF" }}>CSS</option>
                                    <option value="C++" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C++</option>
                                    <option value="C" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C</option>
                                    <option value="JAVA" style={{ color: "black", backgroundColor: "#F6FCFF" }}>JAVA</option>
                                    <option value="PYTHON" style={{ color: "black", backgroundColor: "#F6FCFF" }}>PYTHON</option>
                                    <option value="SQL" style={{ color: "black", backgroundColor: "#F6FCFF" }}>SQL</option>
                                    <option value="APTITUDE" style={{ color: "black", backgroundColor: "#F6FCFF" }}>APTITUDE</option>
                                </select>
                            </div>
                            {chosenlang === '' ? <p className='add-category-error'>{categoryerrors.cat}</p> : null}
                        </div>

                        <div className="answers-and-options">
                            <div className="answers-section">
                                <p>Options</p>
                                <form action="" onSubmit={submitHandler} >
                                    <div className="answer-input-field" >
                                        <input value={inputText}
                                        required
                                            onChange={inputTextHandler} type="text" name="" id="" placeholder='Add Options' />
                                    </div>
                                </form>
                            </div>
                            <div className="options-section">
                            {options.map((option)=>(
                        <li className='option-list' key={option.Oid}>
                        <div className="option">
                            <input type="Checkbox"  defaultChecked={option.isCorrect} className=" s-class item-1" defaultValue={option.value} onClick={() =>[
                                setOptions(options.map((e)=>{
                                    if(e.Oid === option.Oid){
                                        return{
                                            ...e, isCorrect: !e.isCorrect
                                        }
                                    }
                                    return e;
                                }))
                            ]} name='opt'/>
                            <span className=" s-class item-2">{option.value}</span>
                            <DeleteIcon  onClick={()=>handleDelete(option)} style={{color:"#DE5947", cursor:"pointer"}}/>
                        </div>
                        </li>
                    ))}
                            </div>
                        </div>
                        <div className='add-questions-buttons'>
                            <div className="upload-button">
                                <button onClick={handleUpload}>Upload</button>
                            </div>
                            <div className='reset-button'>
                                <button onClick={handleReset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuestions
