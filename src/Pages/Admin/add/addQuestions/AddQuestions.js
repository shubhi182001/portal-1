import React, { useState } from 'react'
import './addquestions.css'
import axios from "axios";
import Navbar from '../../navbar/Navbar'



const AddQuestions = () => {
    const [inputText, setInputText] = useState('');
    const [options, setOptions] = useState([]);
    const [chosenlang, setChosenlang] = useState("");
    const [question, setQuestion] = useState("");


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
        console.log('Uploaded')
        const questionData = {

                "question": question,
                "category": String(chosenlang),
                "options": options

            }
        
        console.log(questionData)
        axios.post(
            'https://csiportal.herokuapp.com/question/addquestion', questionData)
            .then((res) => {
                console.log(res);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(options);
    return (
        <>
        <Navbar/>
            <div className='add-question-body'>
                    <h5 className='heading-question'>Add Question </h5>
                    <div className='white-container'>
                        <div className="question">
                            <p>Question</p>
                            <textarea name="ques" required id="question-here" onChange={handleQuestion}>the question comes here </textarea>
                        </div>
                
                    <div className="dropdown">
                        <h5>Category</h5>
                        <div className="addques-lang">
                            <select className="addques-select" defaultValue={"DEFAULT"} style={{ color: "white" }} onChange={handleLanguage} name="lang" id="options" >
                                <option value="DEFAULT" disabled hidden>Language</option>
                                <option value="C" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C</option>
                                <option value="C++" style={{ color: "black", backgroundColor: "#F6FCFF" }}>C++</option>
                                <option value="Java" style={{ color: "black", backgroundColor: "#F6FCFF" }}>Java</option>
                                <option value="Python" style={{ color: "black", backgroundColor: "#F6FCFF" }}>Python</option>
                            </select>
                        </div>
                    </div>
                   
                        <div className="answers-and-options">
                            <div className="answers-section">
                                <p>Options</p>
                                <form action="" onSubmit={submitHandler}>
                                    <div className="answer-input-field">
                                        <input value={inputText}
                                            onChange={inputTextHandler} type="text" name="" id="" placeholder='Add Options' />
                                    </div>
                                </form>
                            </div>
                            <div className="options-section">
                                    <ul className="option-list">
                                        {options.map(option => (
                                            <div className="option">
                                                <button className="s-class item-1 check" onClick={() => {
                                                    setOptions(options.map((el) => {
                                                        if (el.Oid === option.Oid) {
                                                            return {
                                                                ...el, isCorrect: !el.isCorrect
                                                            }
                                                        }
                                                        return el;
                                                    }))

                                                }}>?</button>
                                                <li className="s-class item-2 option-item">{option.value}</li>
                                                <button className="s-class item-3  delete" onClick={() => {
                                                    setOptions(options.filter(el => el.Oid !== option.Oid))
                                                    // console.log(options)
                                                }}>*</button>

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
                            <button>Reset</button>
                        </div>
                    </div>
            </div>
            </div>         
        </>
    )
}

export default AddQuestions

