import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import appLogo from "../../assets/applogo.png";

export function Navbar() {
    const navigate = useNavigate()


    return (
        <div className="navbar-container">
            {/* Left side (Logo) */}
            <div className="navbar-logo" onClick={() => navigate("/")} >
                <img src={appLogo} alt="loding.." />BusyBuy </div>

            {/* Right side (Links) */}
            <div className="navbar-links">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    <i className="fa-solid fa-house"></i> Home
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    <i className="fa-solid fa-cart-shopping"></i> Cart
                </NavLink>

                <NavLink
                    to="/order"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    <i className="fa-solid fa-basket-shopping"></i> Order
                </NavLink>

                <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                </NavLink>
            </div>
        </div>
    )
}