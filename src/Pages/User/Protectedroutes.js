import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login1 = localStorage.getItem("login1");
    let login2 = localStorage.getItem("login2");
    let instruct = localStorage.getItem("instruct");
    let feedback = localStorage.getItem("feedback");
    let appeared = localStorage.getItem("Appeared");
    let testpage = localStorage.getItem("testpage");
    if (!login1 && !login2 && appeared === "true") {
      navigate("/");
    } else if (appeared === "true") {
      navigate("/");
    } else if (login1) {
      navigate("/homepage");
    } else if (!login2) {
      navigate("/");
    } else if (!instruct) {
      navigate("/instructions");
    } else if (!testpage) {
      navigate("/testwindow");
    } else if (!feedback) {
      navigate("/feedback");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protectedroutes;
