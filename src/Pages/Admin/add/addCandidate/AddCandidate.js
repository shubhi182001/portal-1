import React, { useEffect, useState } from "react";
import "./Addcandidate.css";
import "../../../User/Login/Login.css";
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import TextField from "@mui/material/TextField";
import Ellipse from "../../../../Images/User/Ellipse.svg"
import Group from "../../../../Images/User/Group.svg"
import computers from "../../../../Images/User/computers.png";
// import { useNavigate } from "react-router-dom";
function AddCandidate() {
  const [name, setname] = useState("");
  const [studentNum, setstudentNum] = useState("");
  const [rollNum, setrollNum] = useState("");
  const [mobileNum, setmobileNum] = useState("");
  const [email, setemail] = useState("");
  const [OTP, setOTP] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [gender, setgender] = useState("");
  const [isHosteler, setisHosteler] = useState("");
  const [flag, setFlag] = useState(0);
  // const Navigate = useNavigate();
  var checkStatus = false;
  var checkStatusAll = false;

  const [formErrors, setFormErrors] = useState({});
  const [formErrorsemail, setFormErrorsemail] = useState({});
  const [formErrorsName, setformErrorsName] = useState({});
  const [formErrorsOTP, setformErrorsOTP] = useState({});

  const [formErrorsRoll, setformErrorsRoll] = useState({});

  const [formErrorsstudentNum, setformErrorsstudentNum] = useState({});
  // const [formErrorsyear, setformErrorsyear] = useState({});
  const [formErrorsbranch, setformErrorsbranch] = useState({});
  const [formErrorsmobileNum, setformErrorsmobileNum] = useState({});
  const [formErrorsgender, setformErrorsgender] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);
  const [focused, setFocused] = useState(false);

  // const reRef = useRef(null);

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formdata);
    }
  }, [
    formErrors,
    formErrorsmobileNum,
    formErrorsRoll,
    formErrorsemail,
    isSubmit,
    formErrorsstudentNum,
    formErrorsOTP,
  ]);

  const handleFocusemail = (e) => {
    setFocused(true);
    setFormErrorsemail(validateemail(email));
  };

  const handleFocusName = (e) => {
    setFocused(true);
    setformErrorsName(validateName(name));
  };

  const handleFocusrollNum = (e) => {
    setFocused(true);
    setformErrorsRoll(validateRoll(rollNum));
  };

  const handleFocusmobileNum = (e) => {
    setFocused(true);
    setformErrorsmobileNum(validatemobileNum(mobileNum));
  };
  const handleFocusstudentNum = (e) => {
    setFocused(true);
    setformErrorsstudentNum(validatestudentNum(studentNum));
  };
  const handleFocusOTP = (e) => {
    setOTP(true);
    setformErrorsOTP(validateOTP(OTP));
  };
  const submit = async (e) => {
    e.preventDefault();
    setformErrorsName(validateName(name));
    setFormErrorsemail(validateemail(email));
    setformErrorsmobileNum(validatemobileNum(mobileNum));
    setformErrorsRoll(validateRoll(rollNum));
    setformErrorsstudentNum(validatestudentNum(studentNum));
    setformErrorsRoll(validateRoll(rollNum));
    setformErrorsOTP(validateOTP(OTP));
    setIsSubmit(true);

    console.log(flag);
    if (
      name &&
      rollNum &&
      mobileNum &&
      email
      // ReCAPTCHA
    ) {
      const newEntry = {
        name: name,
        rollNum: String(rollNum),
        mobileNum: Number(mobileNum),
        email: email,
        studentNum: Number(studentNum),
        year: Number(year),
        branch: branch,
        gender: gender,
        isHosteler: Boolean(isHosteler),

        // ReCAPTCHA
      };
      if (checkStatus === true && checkStatusAll === true) {
        console.log(newEntry);
      }
      // const token = await reRef.current.executeAsync();

      axios
        .post("https://csiportal.herokuapp.com/register", newEntry)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            if (flag === 1) {
              // Navigate("/confirm");
            } else {
              window.alert("captcha Required!!!");
            }
          }
        })
        .catch((err) => {
          console.log(err);

          window.alert("Invalid Credentials or user already exists!!!");
        });

      // axios
      //   .post("https://nameless-citadel-14148.herokuapp.com/api/users/captcha",ReCAPTCHA)
      //   .then((resp) => {
      //     console.log(resp.data);
      //   })
    } else if (!(name && rollNum && mobileNum && email)) {
      window.alert("Enter Data in all Fields!!!");
    } else if (
      !(
        name &&
        rollNum &&
        mobileNum &&
        email &&
        branch &&
        year &&
        studentNum &&
        isHosteler
      ) &&
      flag === 1
    ) {
      window.alert("Enter Data in all Fields");
    } else if (flag === 0) {
      window.alert("Captcha Required!!!");
    }
  };

  const validateemail = (value) => {
    const errors = {};
    let regex = new RegExp("[a-z0-9]+@akgec.ac.in");

    if (!value) {
      errors.email = "email is required!";
    } else if (!regex.test(value)) {
      errors.email = "This is not a valid email format!";
    } else {
      checkStatus = true;
    }
    return errors;
  };
  const validateName = (value) => {
    const errors = {};
    let regex = new RegExp("^[A-Za-z ]{3,29}$");
    // let regexi = new RegExp("^[A-Za-z]{3,29}$");
    if (!value) {
      errors.Name = "Name is required!";
    } else if (!regex.test(value)) {
      errors.Name = "Name should only include alphabets";
    }
    // else if (!regexi.test(value)) {
    //   errors.Name = "Name should be minimum of 3 charachters and maximum of 29";
    // }
    else {
      checkStatusAll = true;
    }
    return errors;
  };
  const validateRoll = (value) => {
    const errors = {};
    let regex = new RegExp("^[0-9D-d]+$");
    let regexi = new RegExp("^[0-9D-d]{7,13}$");
    if (!value) {
      errors.rollNum = "Student number is required!";
    } else if (!regex.test(value)) {
      errors.rollNum =
        "Student number should be numeric or can contain a letter D";
    } else if (!regexi.test(value)) {
      errors.rollNum = "Length of student should be of 7-13 digits";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };

  // contact number validation

  const validatemobileNum = (value) => {
    const errors = {};
    // let regex = new RegExp("^[0-9]$");
    let regexi = new RegExp("^[0-9]{10}$");
    if (!value) {
      errors.mobileNum = "Contact  number is required!";
    } else if (!regexi.test(value)) {
      errors.mobileNum =
        "Contact  number should only be numeric and of 10 digits";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };
  const validatestudentNum = (value) => {
    const errors = {};
    let regexi = new RegExp("^[0-9]{7,8}$");
    if (!value) {
      errors.studentNum = "Studnent number is required!!";
    } else if (!regexi.test(value)) {
      errors.studentNum = "Student number should be of 7 or 8 digits long ";
    }
    return errors;
  };

  const validateOTP = (value) => {
    const errors = {};
    if (!value) {
      errors.OTP = "OTP IS REQUIRED!!!";
    }
    return errors;
  };

  return (
    <>
    <div className="admin-main">
      <Navbar/>
      <div className="containerzz ">
        <div className="row">
          <div className="headertext">
            {/* <h1 className="headertxtCandidate">Register</h1> */}
          </div>

          <form action="" className="CandidadateAdd">
          <img src={Ellipse} className="iconadmin " />
      <img src={Group} className="groupadmin " />
            <div className="row">
              <div className="col-lg-6">
                {/* NAMe */}

                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    
                    onBlur={handleFocusName}
                    focused={focused.toString()}
             
                  />
                </div>
                <span className="error_msg">{formErrorsName.Name}</span>
              </div>
              
     
              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="StudentNumber"
                    name="studentNum"
                    value={studentNum}
                    onChange={(e) => setstudentNum(e.target.value)}
                    onBlur={handleFocusstudentNum}
                    focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">
                  {formErrorsstudentNum.studentNum}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="rollNum"
                    name="rollNum"
                    value={rollNum}
                    onChange={(e) => setrollNum(e.target.value)}
                    onBlur={handleFocusrollNum}
                    focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">{formErrorsRoll.rollNum}</span>
              </div>

              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    onBlur={handleFocusemail}
                    focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">{formErrorsemail.email}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                    // onBlur={handleFocusmobileNum}
                    // focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">{formErrorsgender.gender}</span>
              </div>

              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField  
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="mobileNum"
                    name="mobileNum"
                    value={mobileNum}
                    onChange={(e) => setmobileNum(e.target.value)}
                    onBlur={handleFocusmobileNum}
                    focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">
                  {formErrorsmobileNum.mobileNum}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="year"
                    name="year"
                    value={year}
                    onChange={(e) => setyear(e.target.value)}
                    // onBlur={handleFocusyear}
                    // focused={focused.toString()}
                  />
                </div>
                <span className="error_msg">{formErrorsRoll.rollNum}</span>
              </div>

              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="text"
                    className="inputcandAdd"
                    label="branch"
                    name="branch"
                    value={branch}
                    onChange={(e) => setbranch(e.target.value)}
                    //  onBlur={handleFocusemail}
                    //  focused={focused.toString()}
                  />
                </div>
                <span className="error_msg messages_err">{formErrorsbranch.branch}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="inputCandidate">
                  <TextField
                    required="required"
                    variant="outlined"
                    size="small"
                    type="boolean"
                    className="inputcandAdd"
                    label="isHosteler"
                    name="isHosteler"
                    value={isHosteler}
                    onChange={(e) => setisHosteler(e.target.value)}
                    //  onBlur={handleFocusemail}
                    //  focused={focused.toString()}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btnregx buttonPositon"
              onClick={submit}
            >
              Register
            </button>
          </form>
         
        </div>
      </div>
      <div className="img">
        <img src={computers} alt="none" className="computers computersRegister"/>
      </div>
      </div>
    </>
  );
}

export default AddCandidate;
