import React from 'react'
import Navbar from '../navbar/Navbar'
import {Link} from "react-router-dom"

 import "./response.css"
import { Card } from 'react-bootstrap'
import { style } from '@mui/system'


function Responses() {
  return (
    <>
    <div className="admin-main">
    <Navbar/>
    <div className="response">
        <h1 className='response_text'>Response</h1> 
    </div>
    <div className='container_of_data'>
    {/* <Card className="container_of_data"> */}
        <div className='upper_div'>
            <ul>
                <li>Name</li>
                <li>Student no.</li>
                <li>Branch</li>
                <li>Score</li>
                <li>Start Time</li>
                <li>End Time</li>
            </ul>
            <ul>
                <li>Nate</li>
                <li>2010565</li>
                <li>CSE</li>
                <li>100</li>
                <li>10:00</li>
                <li>12:00</li>
            </ul>
        </div>
        <div className='lower_div'>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
            <h5>Question 1</h5>
            <p>Which tag is used for inserting image</p>
            <h5>Answer 1</h5>
            <p>img tag</p>
            <h5>Correct</h5>
            <p>Yes</p>
            <h5>status</h5>
            <p>Marked for review</p>
            <hr></hr>
        </div>
        {/* </Card> */}
    </div>
    </div>
    </>
  )
}
export default Responses
