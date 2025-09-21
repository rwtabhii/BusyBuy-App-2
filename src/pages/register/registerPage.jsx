import {  useRef } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../../api/users/users";
import "./registerPage.css";
import { useNavigate } from "react-router-dom";

export function RegisterPage({ onSubmitHandler, loading }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

   const submitUserData = async (e) => {
    e.preventDefault(); // prevent form reload

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await registerUser({ name, email, password });
      toast.success("Signup successful!");
      // Redirect to Sign In page
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Login failed!");
    }
  };



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

        <button className="loginBtn" onClick={submitUserData}>
          {loading ? "..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
