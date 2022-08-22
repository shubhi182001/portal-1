import React from "react";
import { ToastContainer, toast } from "react-toastify";
import './MobileError.css'
const MobileError = () => {
  toast.error("Sorry, can be access only in Desktop/Laptop");
  return (
    <div>
      <div className="mobile_view">
        <ToastContainer />
      </div>
    </div>
  );
};

export default MobileError;
