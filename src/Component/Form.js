import logo from "../assets/images/logo_small3.png";
import React, { useEffect, useState } from "react";
import "../Style/Form.scss";
import axios from "axios";

function Form() {
  const host = "https://whitetales.herokuapp.com";

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [appintmentDate, setAppintmentDate] = useState();
  const [error, setError] = useState(false);

  const submit = async () => {
    // console.log(name);
    if (!name || !email || !mobile || !appintmentDate) {
      alert("Please enter the detail");
    } else {
      try {
        const res = await axios.post(`${host}/contact/create-lead`, {
          fullName: name,
          phone: mobile,
          date: appintmentDate,
          email: email,
          description: "",
        });
        console.log(res.data.message);
        if (res.data.message === "Your Response Saved Successfully") {
          alert("Your requested have submitted");
          setName("");
          setAppintmentDate();
          setEmail("");
          setMobile();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // useEffect(()=>{
  //   if (!name || !email || !mobile || appintmentDate){
  //     setError(true)
  //   }
  // }, [name , email , mobile , appintmentDate])

  return (
    <div id="form" className="form">
      <div className="left">
        <h1>Book an Appointment</h1>
        <div className="inputs">
          <div className="input">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="input">
            <input
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="text"
              placeholder="Mobile Number"
            />
          </div>
          <div className="input">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="input">
            <input
              onChange={(e) => {
                setAppintmentDate(e.target.value);
              }}
              type="date"
              placeholder="Appointment Date"
            />
          </div>
          <button disabled={error} onClick={submit}>
            Book Now
          </button>
        </div>
      </div>
      <div className="right">
        <div style={{ height: "250px", width: "250px" }}>
          <img src={logo} alt="" height="100%" width="100%" />
        </div>
        <h1>WHITE TALES</h1>
        <h3>
          Address Line 1, Area, City
          <br />
          State - PinCode
          <br />
          +91-0000000000
          <br />
          info@whitetales.com
        </h3>
      </div>
    </div>
  );
}

export default Form;
