import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaList,
  FaSignOutAlt,
  FaHeart,
  FaFileAlt,
  FaShoppingCart,
  FaSignInAlt,
} from "react-icons/fa";

const UserHeader = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("UserData"));

  const handleLogout = () => {
    localStorage.removeItem("UserData");
    navigate("/")
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-smoky-white">
      <a className="navbar-brand" href="/" style={{ fontWeight: "bolder" }}>
        RamKashyap.Dev
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#admin-navbar-nav"
        aria-controls="admin-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="admin-navbar-nav">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <a className="nav-link" href="/">
             Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
            About
            </a>
          </li>
          <li className="nav-item">
            
              <a className="nav-link" href="/projects">
                Projects
              </a>
            
          </li>
          <li className="nav-item">
            
            <a className="nav-link" href="/contact">
              Contact Me
            </a>
          
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
