import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import appLogo from "../../assets/applogo.png";
import { useAuthValue } from "../../context/authContext/authContext";

export function Navbar() {
    const navigate = useNavigate();
    const { login, setLogin } = useAuthValue();

    const userLogout = () => {
        setLogin(false);
    };

    return (
        <div className="navbar-container">
            {/* Left side (Logo) */}
            <div className="navbar-logo" onClick={() =>{ navigate("/");}}>
                <img src={appLogo} alt="logo" /> BusyBuy
            </div>

            {/* Right side (Links) */}
            <div className="navbar-links">
                {/* Always show Home */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    <i className="fa-solid fa-house"></i> Home
                </NavLink>

                {/* Show only when logged in */}
                {login && (
                    <>
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

                        <div className="dropdown userProfile">
                            <i className="fa-regular fa-circle-user dropbtn"></i>
                            <div className="dropdown-content">
                                <Link to="/profile">Profile</Link>
                                <Link to="/" onClick={userLogout}>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                {/* Show Sign In only when NOT logged in */}
                {!login && (
                    <NavLink
                        to="/login"
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Sign In
                    </NavLink>
                )}
            </div>
        </div>
    );
}
