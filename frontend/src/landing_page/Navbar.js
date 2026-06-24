import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const linkStyle = (path) => ({
        textDecoration: "none",
        color: isActive(path) ? "#387ed1" : "#4a4a4a",
        fontWeight: isActive(path) ? "600" : "400",
        borderBottom: isActive(path) ? "2px solid #387ed1" : "none",
        paddingBottom: "4px",
    });

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/signup" style={linkStyle("/signup")}>Sign Up</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login" style={linkStyle("/login")}>Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about" style={linkStyle("/about")}>About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/product" style={linkStyle("/product")}>Product</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing" style={linkStyle("/pricing")}>Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/support" style={linkStyle("/support")}>Support</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;