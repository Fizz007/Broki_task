import React, { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userCont } from "./UseContext/Userauth";

const Login = () => {
  const [input, setInput] = useState({
    user: "",
    pass: "",
  });

  const { changeLogin } = useContext(userCont);
  const username = "agam@broki.in";
  const password = "dBroki@123456";
  let navigate = useNavigate();

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!input.user || !input.pass) {
      toast.error("Some fields are missing");
    } else if (input.user !== username || input.pass !== password) {
      toast.error("Invalid credentials");
    } else {
      changeLogin();
      localStorage.setItem('user', JSON.stringify(input))
      navigate("/home");
      toast.success("Login Succesful");
    }
  }
  return (
    <>
      <div className="head_wrapper">
        <div className="wrapper">
          <h1>Get Started</h1>
          <p>Fill the form to Login</p>
          <form onSubmit={handleLogin} autoComplete="on">
            <input
              type="email"
              name="user"
              value={input.user}
              onChange={inputChange}
              placeholder="Enter email"
            />
            <input
              type="password"
              name="pass"
              value={input.pass}
              onChange={inputChange}
              placeholder="Password"
            />
            <button type="submit" className="btn">Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
