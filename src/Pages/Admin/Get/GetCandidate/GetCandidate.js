import React, { useEffect, useState } from "react";
import './Getregistered.css';
import axios from "axios";
// import { useNavigate } from "react-router-dom";
function Getregistered() {

    const [Name, setName] = useState("");
    const [Studentno, setStudentno] = useState("");
    const [Rollno, setRollno] = useState("");
    const [Contactno, setContactno] = useState("");
    const [Email, setEmail] = useState("");
    const [OTP, setOTP] = useState("");
    const [Branch, setBranch] = useState("");
    const [Year, setYear] = useState("");
    const [Residence, setResidence] = useState("");
    const [flag, setFlag] = useState(0);
    // const Navigate = useNavigate();
    var checkStatus = false;
    var checkStatusAll = false;

    
    const [formErrors, setFormErrors] = useState({});
    const [formErrorsEmail, setFormErrorsEmail] = useState({});
    const [formErrorsName, setformErrorsName] = useState({});
    const [formErrorsOTP, setformErrorsOTP] = useState({});
    
    const [formErrorsRoll, setformErrorsRoll] = useState({});
    
    const [formErrorsStudentno, setformErrorsStudentno] = useState({});

    const [formErrorsContactno, setformErrorsContactno] = useState({});
    
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
      formErrorsContactno,
      formErrorsRoll,
      formErrorsEmail,
      isSubmit,
      formErrorsStudentno,
      formErrorsOTP,
    ]);
  
    const handleFocusEmail = (e) => {
      setFocused(true);
      setFormErrorsEmail(validateEmail(Email));
    };
  
    const handleFocusName = (e) => {
      setFocused(true);
      setformErrorsName(validateName(Name));
    };
  
    const handleFocusRollNo = (e) => {
      setFocused(true);
      setformErrorsRoll(validateRoll(Rollno));
    };
  
    const handleFocusContactno = (e) => {
      setFocused(true);
      setformErrorsContactno(validateContactno(Contactno));
    };
    const handleFocusStudentno =(e)=>{
        setFocused(true);
        setformErrorsStudentno(validateStudentno(Studentno));
    };
    const handleFocusOTP=(e)=>{
        setOTP(true);
        setformErrorsOTP(validateOTP(OTP));
    };
    const submit = async (e) => {
      e.preventDefault();
      setformErrorsName(validateName(Name));
      setFormErrorsEmail(validateEmail(Email));
      setformErrorsContactno(validateContactno(Contactno));
      setformErrorsRoll(validateRoll(Rollno));
      setformErrorsStudentno(validateStudentno(Studentno));
      setformErrorsRoll(validateRoll(Rollno));
      setformErrorsOTP(validateOTP(OTP));
      setIsSubmit(true);

      console.log(flag);
      if (
        Name &&
        Rollno &&
        Contactno &&
        Email
        // ReCAPTCHA
      ) {
        const newEntry = {
          Name: Name,
          Rollno: String(Rollno),
          Contactno: Number(Contactno),
          Email: Email,
  
          // ReCAPTCHA
        };
        if (checkStatus === true && checkStatusAll === true) {
          console.log(newEntry);
        }
        // const token = await reRef.current.executeAsync();
  
        axios
          .post(
            "https://csiportal.herokuapp.com/register",
            newEntry
          )
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
      } 
      else if ( !( Name &&
      Rollno &&
        Contactno &&
        Email) ){
        window.alert("Enter Data in all Fields!!!");
      } 
      else if ( !( Name &&
        Rollno &&
          Contactno &&
          Email &&
          Branch &&
          Year &&
          OTP &&
          Residence) &&
          flag === 1) {
            window.alert("Enter Data in all Fields")
          }
      
      else if(flag===0) {
        window.alert("Captcha Required!!!");
      }




    };




    const validateEmail = (value) => {
        const errors = {};
        let regex = new RegExp("[a-z0-9]+@akgec.ac.in");
    
        if (!value) {
          errors.Email = "Email is required!";
        } else if (!regex.test(value)) {
          errors.Email = "This is not a valid email format!";
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
        let regexi = new RegExp("^[0-9D-d]{7,7}$");
        if (!value) {
          errors.Rollno = "Student number is required!";
        } else if (!regex.test(value)) {
          errors.Rollno =
            "Student number should be numeric or can contain a letter D";
        } else if (!regexi.test(value)) {
          errors.Rollno = "Length of student should be of 7 digits";
        } else {
          checkStatusAll = true;
        }
        return errors;
      };
    
      // contact number validation
    
      const validateContactno = (value) => {
        const errors = {};
        // let regex = new RegExp("^[0-9]$");
        let regexi = new RegExp("^[0-9]{10}$");
        if (!value) {
          errors.Contactno = "Contact  number is required!";
        } else if (!regexi.test(value)) {
          errors.Contactno =
            "Contact  number should only be numeric and of 10 digits";
        }
     
        else {
          checkStatusAll = true;
        }
        return errors;
      };
      const validateStudentno =(value)=>
      {
          const errors={};
        let regexi = new RegExp("^[0-9]{7,8}$");
        if(!value)
        {
            errors.Studentno ="Studnent number is required!!";
        }
        else if (!regexi.test(value))
        {
            errors.Studentno="Student number should be of 7 or 8 digits long ";
        }
        return errors;
      };
      
const validateOTP =(value)=>
{ const errors={};
    if(!value)
    {
        errors.OTP="OTP IS REQUIRED!!!"
    }
return errors;
};

  return (

<>
<div className="container mw-100" >
    <div className="card regcard">
<div className="row">
    <h1 className='TextRegister'>Register</h1>
</div>
<form action="" className='Input'>
<div className="row">
    <div className="col-lg-6 inputtag">

    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleFocusName}
                focused={focused.toString()}
              />
<span className="error_msg">{formErrorsName.Name}</span>
    </div>
    <div className="col-lg-6 inputtag">
    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="StudentNumber"
                name="Studentno"
                value={Studentno}
                onChange={(e) => setStudentno(e.target.value)}
                onBlur={handleFocusStudentno}
                focused={focused.toString()}
              />
<span className="error_msg">{formErrorsStudentno.Studentno}</span>
    </div>
</div>
<div className="row">
    <div className="col-lg-6 inputtag">
        
    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="RollNo"
                name="RollNo"
                value={Rollno}
                onChange={(e) => setRollno(e.target.value)}
                onBlur={handleFocusRollNo}
                focused={focused.toString()}
              />
              <span className="error_msg">{formErrorsRoll.Rollno}</span>
    </div>
    <div className="col-lg-6 inputtag">    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Email"
                name="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleFocusEmail}
                focused={focused.toString()}
              />
              <span className="error_msg">{formErrorsEmail.Email}</span>
              </div>

</div>
<div className="row">
    <div className="col-lg-6 inputtag">
    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Contactno"
                name="Contactno"
                value={Contactno}
                onChange={(e) => setContactno(e.target.value)}
                onBlur={handleFocusContactno}
                focused={focused.toString()}
              />
              <span className="error_msg">{formErrorsContactno.Contactno}</span>
    </div>
    <div className="col-lg-6 inputtag">    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="OTP"
                name="OTP"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                onBlur={handleFocusOTP}
                focused={focused.toString()}
              />
              <span className="error_msg">{formErrorsOTP.OTP}</span>
              </div>
</div>
<div className="row">
    <div className="col-lg-6 inputtag">  
      <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                // value={Name}
                // onChange={(e) => setName(e.target.value)}
                // onBlur={handleFocusName}
                // focused={focused.toString()}
              /></div>
    <div className="col-lg-6 inputtag">
    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                // value={Name}
                // onChange={(e) => setName(e.target.value)}
                // onBlur={handleFocusName}
                // focused={focused.toString()}
              />
    </div>
</div>
<div className="row">
    <div className="col-lg-6 inputtag">
    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                // value={Name}
                // onChange={(e) => setName(e.target.value)}
                // onBlur={handleFocusName}
                // focused={focused.toString()}
              />
    </div>
    <div className="col-lg-6 inputtag">


    <input
                required="required"
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                // value={Name}
                // onChange={(e) => setName(e.target.value)}
                // onBlur={handleFocusName}
                // focused={focused.toString()}
              />
    </div>

</div>


<button
                type="button"
                className="btn btnregx input_field"
                onClick={submit}
              >
                Register
              </button>
</form>
    </div>
    
</div>
</>
  );
}

export default Getregistered;