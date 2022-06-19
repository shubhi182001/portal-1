import React from 'react'
import "./homepage.css"
import Navbar from '../navbar/Navbar'
 
import { Card } from '@mui/material'

function Homepage() {
  return (
      <>
      <div className="admin-main homepage">
        <Navbar/>
        <div className="box">
          <Card className='card'>
            <table className="table">
              <tbody>
              <tr>
                <td className='field'>Total Registerations</td>
                <td className='value' value="Registerations">4</td>
              </tr>
              <tr>
                <td className='field'>Total Attendees</td>
                <td className='value' value="Attendees">4</td>
              </tr>
              <tr>
                <td className='field'>Total Questions Uploaded</td>
                <td className='value' value="Questions">4</td>
              </tr>
              <tr>
                <td className='field'>Total Feedback Questions Uploaded</td>
                <td className='value' value="Feedbackq">4</td>
              </tr>
              <tr>
                <td className='field'>Currently Active Users</td>
                <td className='value' value="ActiveUsers">4</td>
              </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      </>
  )
}

export default Homepage