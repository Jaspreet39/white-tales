import React from "react";
import "../Style/Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginScreen() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = () => {
    if (email === Email && password === Password) {
      navigation("/dashboard");
    } else setError(true);
  };
  const Email = "admin";
  const Password = "admin";
  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Login</h1>
        {error && (
                  <p>Error</p>
        )}
        <div style={{ marginTop: "10px" }}>
          <div className="inputs">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="enter email"
            />
          </div>
          <div className="inputs">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="enter password"
            />
          </div>
        </div>
        <center>
          <button onClick={login}>LOGIN</button>
        </center>
      </div>
    </div>
  );
}

export default LoginScreen;
