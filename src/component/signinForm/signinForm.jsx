import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SigninForm.css";

export function SigninForm({ onSubmitHandler, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

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

        <button className="loginBtn">
          {loading ? "..." : "Sign In"}
        </button>

        <NavLink to="/signup" className="link">
          <p className="switchText">Or SignUp instead</p>
        </NavLink>
      </form>
    </div>
  );
}
