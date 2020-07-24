import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

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

  const { logout } = useAuth0();
  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/" className="nav-item">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/register" className="nav-item">
          <li className="nav-link">Login</li>
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
      </>
    );
  };

  const authenticatedGameBar = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/game">
            <i className="fas fa-futbol light-green-text-2"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/info">
            <i className="fas fa-globe light-green-text-2"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/streams">
            <i className="fas fa-tv light-green-text-2"></i>
          </Link>
        </li>
        <li className="nav-item" onClick={() => logout()}>
          <Link className="nav-link">
            <i className="fa fa-power-off" placeholder="logout"></i>
          </Link>
        </li>
      </>
    );
  };

  const unauthenticatedGameBar = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/streams">
            <i className="fas fa-tv light-green-text-2"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/info">
            <i className="fas fa-globe light-green-text-2"></i>
          </Link>
        </li>
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
            {!isAuthenticated
              ? unauthenticatedGameBar()
              : authenticatedGameBar()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
