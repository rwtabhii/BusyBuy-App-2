import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { loginUser } from "../../api/users/users";

import "./loginForm.css";

export function LoginForm({ onSubmitHandler, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()

  const checkUserCred=async(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await loginUser({email,password});
      toast.success("Login successful")
      navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Failed to Login")
    }

  }

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmitHandler}>
        <h2 className="loginTitle">Sign In</h2>

        <input
          type="email"
          name="email"
          ref={emailRef}
          className="loginInput"
          placeholder="Enter Email"
        />

        <input
          type="password"
          name="password"
          ref={passwordRef}
          className="loginInput"
          placeholder="Enter Password"
        />

        <button className="loginBtn" onClick={checkUserCred}>
          {loading ? "..." : "Sign In"}
        </button>

        <NavLink to="/register" className="link">
          <p className="switchText">Or SignUp instead</p>
        </NavLink>
      </form>
    </div>
  );
}
