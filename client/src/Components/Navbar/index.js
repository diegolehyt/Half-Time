import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton";

const styles = {
  navB: {
    fontFamily: "'Trade Winds', cursive",
  },
  imgB: {
    marginRight: "10px",
  },
};

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();

  const logoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        console.log(data);
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/" className="nav-item">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/login" className="nav-item">
          <li className="nav-link">Login</li>
        </Link>
        <Link to="/register" className="nav-item">
          <li className="nav-link">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/" className="nav-item">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/selectplayers" className="nav-item">
          <li className="nav-link">Select Players</li>
        </Link>
        <Link to="/myteam" className="nav-item">
          <li className="nav-link">My Team</li>
        </Link>
        <LogoutButton />
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div className="container">
        <Link className="navbar-brand gradient-text" to="/" style={styles.navB}>
          <img
            src="images/logoA.png"
            width="40px"
            height="40px"
            tabindex="-1"
            style={styles.imgB}
            alt="logo"
          />
          HalfTime
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto smooth-scroll">
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <Link className="nav-link" to="/game">
                <i className="fas fa-futbol light-green-text-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/diegolehyt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="far fa-calendar-alt light-green-text-2"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/streams">
                <i className="fas fa-tv light-green-text-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
