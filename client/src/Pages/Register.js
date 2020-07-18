import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import ProjectCard from "../Components/ProjectCard";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive",
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
  },
  view: {
    position: "relative",
    overflow: "hidden",
  },
  vidddeo: {
    position: "fixed",
    maxHeight: "100%",
    minWidth: "100%",
  },
  sec: {
    marginTop: "10%",
    height: "100%",
  },
  sic: {
    maxHeight: "100%",
  },
  sac: {
    marginTop: "35%",
  },
};

const Register = (props) => {
  // const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  // useEffect(() => {
  //   console.log('user: ' + user)
  //   console.log('auth: ' + isAuthenticated)
  // }, [user]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
    });
  };

  const resetForm = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <Intro>
      <Video />
      <Mask>
        <ProjectCard />
        <Container>
          <div
            className="col-md-6 col-sm-12 white-text text-center text-md-left wow fadeIn"
            style={styles.sec}
          >
            <h3
              style={styles.headerC}
              className="gradient-text display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5 text-center"
            >
              Half Time
            </h3>
            <hr className="hr-light my-4 w-75 style-two" />
            <h4 style={styles.headerB} className="subtext-header mt-2 mb-4">
              Best free guide of responsive web design The most comprehensive
              tutorial for the Bootstrap 4. Loved by over 500 000 users. Video
              and written versions available. Create your own, stunning website.
            </h4>
            <a
              className="btn btn-rounded btn-outline-white"
              data-toggle="modal"
              data-target="#revisa"
              href
            >
              <i className="fas fa-user-edit"></i> Register
            </a>
          </div>
          <div className="col-md-6 col-sm-12 forma animated fadeInRight">
            <section
              className="text-left px-md-12 mx-md-12 white-text"
              style={styles.sac}
            >
              <h3 className="font-weight-bold mb-4">Register</h3>

              <div className="row">
                <div className="col-md-12 mb-md-12 mb-12">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            name="fullname"
                            onChange={onChange}
                            className="form-control white-text"
                          />
                          <label htmlFor="fullname" className="white-text">
                            Full Name
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            className="form-control white-text"
                            type="text"
                            name="email"
                            onChange={onChange}
                          />
                          <label htmlFor="email" className="white-text">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            className="form-control white-text"
                            type="text"
                            name="username"
                            onChange={onChange}
                          />
                          <label htmlFor="username" className="white-text">
                            Username
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <input
                            className="form-control white-text"
                            type="password"
                            name="password"
                            onChange={onChange}
                          />
                          <label htmlFor="password" className="white-text">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-md btn-rounded btn-outline-white"
                      type="submit"
                    >
                      Register
                    </button>
                    <LoginButton />
                    <LogoutButton />
                  </form>
                  {message ? <Message message={message} /> : null}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </Mask>
    </Intro>
  );
};

export default Register;
