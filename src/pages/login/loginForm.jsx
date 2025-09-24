import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../api/users/users";
import "./loginForm.css";
import { useDispatch } from "react-redux";
import { setLogin,setUserDetail } from "../../redux/authReducer/authReducer";


export function LoginForm({ loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // ✅ Handle login form submission
  const checkUserCred = async (e) => {
    e.preventDefault(); // Prevent page reload

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Call Firebase login API
      const user = await loginUser({ email, password });
      console.log("User Logged In:", user);

      // Update global auth state
       dispatch(setLogin(true))
      dispatch(setUserDetail(user));

      toast.success("Login successful ✅");
      navigate("/"); // Redirect to Home page
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Failed to login ❌");
    }
  };

  return (
    <div className="formContainer">
      {/* Attach submit handler directly to form */}
      <form className="form" onSubmit={checkUserCred}>
        <h2 className="loginTitle">Sign In</h2>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="loginInput"
          placeholder="Enter Email"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          ref={passwordRef}
          className="loginInput"
          placeholder="Enter Password"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="loginBtn">
          {loading ? "..." : "Sign In"}
        </button>

        {/* Redirect to Register Page */}
        <NavLink to="/register" className="link">
          <p className="switchText">Or Sign Up instead</p>
        </NavLink>
      </form>
    </div>
  );
}
