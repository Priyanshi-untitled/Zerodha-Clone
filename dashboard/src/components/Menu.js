import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GeneralContext } from "../context/GeneralContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000/login";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user } = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async (e) => {
    e.stopPropagation();
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      window.location.href = LOGIN_URL;
    } catch (err) {
      console.error("Logout failed:", err);
      window.location.href = LOGIN_URL;
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const initials = user ? user.slice(0, 2).toUpperCase() : "ZU";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative" }}>
          <div className="avatar">{initials}</div>
          <p className="username">{user || "USERID"}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown" style={{
              position: "absolute",
              bottom: "45px",
              right: "0",
              backgroundColor: "white",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1000,
              padding: "10px",
              minWidth: "120px",
              textAlign: "left"
            }}>
              <p style={{ margin: "0 0 8px 0", color: "#333", fontSize: "0.85rem", fontWeight: "bold" }}>{user || "User"}</p>
              <hr style={{ margin: "5px 0", height: "1px", border: "none", backgroundColor: "#f0f0f0" }} />
              <button 
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "6px 12px",
                  backgroundColor: "#df4949",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  textAlign: "center"
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
