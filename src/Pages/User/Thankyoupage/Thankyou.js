import React, { useEffect } from "react";
import "./Thankyou.css";
import Logocsi from "../../../Images/User/Logocsi.svg";
const Thankyou = () => {
  useEffect(() => {
    localStorage.setItem("feedback", true);
    localStorage.removeItem("login2");
    localStorage.removeItem("instruct");
    localStorage.removeItem("testpage");
    localStorage.removeItem("cookie");
    // eslint-disable-next-line
  }, []);
  setTimeout(()=>{
    window.location.reload();
  },10000);
  return (
    <>
      <div className="main">
        <div className="container1">
          <div className="thank_img">
            <img src={Logocsi} alt="none" className="Thankyou_img" />
          </div>

          <div className="txt">
            <p>THANK YOU FOR PARTICIPATING</p>
            <p>You have been successfully logged out.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
