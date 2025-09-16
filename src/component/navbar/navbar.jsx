import { Link } from "react-router-dom";
import "./navbar.css";
import appLogo from "../../assets/applogo.png";

export function Navbar() {


    return (
        <div className="navbar-container">
            {/* Left side (Logo) */}
            <div className="navbar-logo" ><img src={appLogo} alt="loding.." />BusyBuy </div>

            {/* Right side (Links) */}
            <div className="navbar-links">
                <Link to="/" >Home</Link>
                <Link to="/login">Sign In</Link>
            </div>
        </div>
    )
}