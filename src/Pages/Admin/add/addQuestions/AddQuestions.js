import React, { useState } from 'react'
import './addquestions.css'



const AddQuestions = () => {
    const [inputText, setInputText] = useState('');
    const [options, setOptions] = useState([]);



    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setOptions(
            [...options, { text: inputText, isRight: false, id: Math.random() * 1000 }]
        );
        setInputText(' ');
    }



    console.log(options);
    return (
        <>
            <div className="add-questions-answers">
                <div className="ques-and-ans">
                    <h3>Add a Question </h3>
                    <div className="questions">
                        <div className="question">
                            <p>Question</p>
                            <textarea name="ques" id="question-here" >the question comes here </textarea>
                        </div>
                    </div>
                    <div className="dropdown">
                        languages dropdown here
                    </div>
                    <div className="answers">
                        <div className="answers-and-options">
                            <div className="answers-section">
                                <p>Answer</p>
                                <form action="" onSubmit={submitHandler}>
                                    <div className="answer-input-field">
                                        <input value={inputText}
                                            onChange={inputTextHandler} type="text" name="" id="" placeholder='Press enter to add an option' />

                                    </div>

                                </form>
                            </div>
                            <div className="options-section">
                                <div className="option-container">
                                    <ul className="option-list">
                                        {options.map(option => (
                                            <div className="option">
                                                {/* <input type="checkbox" name="" id="" /> */}
                                                <button className="s-class item-1 check" onClick={() => {
                                                    setOptions(options.map((el) => {
                                                        if (el.id === option.id) {
                                                            return {
                                                                ...el, isRight: !el.isRight
                                                            }
                                                        }
                                                        return el;
                                                    }))

                                                }}>?</button>
                                                <li className="s-class item-2 option-item">{option.text}</li>
                                                <button className="s-class item-3  delete" onClick={() => {
                                                    setOptions(options.filter(el => el.id !== option.id))
                                                    console.log(options);
                                                }}>*</button>

                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuestions

