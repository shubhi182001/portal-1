import React, { useEffect, useState } from 'react'
import './addquestions.css'
import axios from "axios";
import Navbar from '../../navbar/Navbar'
import { Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';





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
        setInputText(' ');
    }

    const handleLanguage = (e) => {
        e.preventDefault();
        setChosenlang(e.target.value)
    }

    const handleQuestion = (e) => {
        e.preventDefault();
        setQuestion(e.target.value)
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
        if (questionData.question && questionData.category && options.length === 4) {
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
            if (options.length > 4) {
                window.alert("Can only add 4 options");
            }
            console.log('Add Questions validations failed')
        }
    }
    useEffect(() => {

        if (Object.keys(questionerrors).length === 0 && isSubmit && Object.keys(categoryerrors).length === 0) {
            console.log('Request Sent');
        } else {
            console.log('Some error')
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
                            <textarea name="ques" value={question} required id="question-here" onChange={handleQuestion}></textarea>
                            {question.length === 0 ? <p className='add-ques-error'>{questionerrors.ques}</p> : null}
                        </div>

                        <div className="dropdown">
                            <h5>Category</h5>
                            <div className="addques-lang">
                                <select className="addques-select" required value={chosenlang} style={{ color: "black" }} onChange={handleLanguage} name="lang" id="options" >
                                    <option value="DEFAULT" hidden>Language</option>
                                    <option value="HTML" style={{ color: "black", backgroundColor: "#F6FCFF" }}>HTML</option>
                                    <option value="CSS" style={{ color: "black", backgroundColor: "#F6FCFF" }}>CSS</option>
                                    <option value="C++" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C++</option>
                                    <option value="C" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C</option>
                                    <option value="JAVA" style={{ color: "black", backgroundColor: "#F6FCFF" }}>JAVA</option>
                                    <option value="Python" style={{ color: "black", backgroundColor: "#F6FCFF" }}>APTITUDE</option>
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
                                            onChange={inputTextHandler} type="text" name="" id="" placeholder='Add Options' />
                                    </div>
                                </form>
                            </div>
                            <div className="options-section">
                                <ul className="option-list">
                                    {options.map(option => (
                                        <div className="option" style={{ alignItems: "center" }}>
                                            <Checkbox checked={option.isCorrect} value={option.value} className="s-class item-1 check" onClick={() => {
                                                setOptions(options.map((el) => {

                                                    if (el.Oid === option.Oid) {
                                                        return {
                                                            ...el, isCorrect: !el.isCorrect
                                                        }
                                                    }
                                                    return el;
                                                }))

                                            }} />
                                            <li className="s-class item-2 option-item" key={option.Oid} >{option.value}</li>
                                            <DeleteIcon fontSize='10px' height="8px" style={{ color: "red", cursor: "pointer" }} className=" item-3  delete" onClick={() => {
                                                setOptions(options.filter(el => el.Oid !== option.Oid))
                                            }} />

                                        </div>

                                    ))}
                                </ul>
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
