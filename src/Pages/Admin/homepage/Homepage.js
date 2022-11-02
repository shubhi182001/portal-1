import React from "react";
import "./homepage.css";
import Navbar from "../navbar/Navbar";

import { Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Homepage() {
  const [data, setData] = useState({
    total_registration: 0,
    total_ques_uploaded: 0,
    total_feedback_ques: 0,
    current_active_users: 0,
    total_attendees: 0,
  });
  const url = `${process.env.REACT_APP_URL}/admin/total`;
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.result);
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    // refreshPage();
    // setInterval(()=>{
    //   window.location.reload();
    // },1000);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="admin-main homepage">
        <Navbar />
        <div className="box">
          <Card className="card">
            <table className="table">
              <tbody>
                <tr>
                  <td className="field">Total Registerations</td>
                  <td className="value" value="total_registration">
                    {data.total_registration}
                  </td>
                </tr>
                <tr>
                  <td className="field">Total Attendees</td>
                  <td className="value" value="total_attendees">
                    {data.total_attendees}
                  </td>
                </tr>
                <tr>
                  <td className="field">Total Questions Uploaded</td>
                  <td className="value" value="total_ques_uploaded">
                    {data.total_ques_uploaded}
                  </td>
                </tr>
                <tr>
                  <td className="field">Total Feedback Questions Uploaded</td>
                  <td className="value" value="total_feedback_ques">
                    {data.total_feedback_ques}
                  </td>
                </tr>
                <tr>
                  <td className="field">Currently Active Users</td>
                  <td className="value" value="current_active_users">
                    {data.current_active_users}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Homepage;
