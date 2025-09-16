import { useRef } from "react";
import "./SignupForm.css";

export function SignupForm({ onSubmitHandler, loading }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="formContainer">
      <form className="form" onSubmit={onSubmitHandler}>
        <h2 className="loginTitle">Sign Up</h2>

        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Enter Name"
          className="loginInput"
        />

        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Enter Email"
          className="loginInput"
        />

        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="Enter Password"
          className="loginInput"
        />

        <button className="loginBtn">
          {loading ? "..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
