import React, { useState } from 'react'
import OptionsList from './OptionsList'
import './addquestions.css'

const AddQuestions = () => {
    const [inputText, setInputText] = useState('');
    const [options, setOptions] = useState([]);


    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setOptions(
            [...options, { text: inputText, isRight: false, id: Math.random() * 1000 }]
        );
        setInputText(' ');
    }
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
                                {/* <Form options={options} inputText={inputText} setOptions={setOptions} setInputText={setInputText} /> */}
                                <form action="" onSubmit={submitHandler}>
                                    <div className="answer-input-field">
                                        <input value={inputText}
                                            onChange={inputTextHandler} type="text" name="" id="" placeholder='Press enter to add an option' />
                                        {/* <button onClick={submitHandler} type="submit" >
                                                       Answer
                                          </button> */}
                                    </div>

                                </form>
                            </div>
                            <div className="options-section">
                                <OptionsList setOptions={setOptions} options={options} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuestions