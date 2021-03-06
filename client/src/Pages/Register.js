import React, { useState, useRef, useEffect } from "react";
import Message from "../Components/Message";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import { useAuth0 } from "@auth0/auth0-react";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive",
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
  },
  headerF: {
    fontFamily: "'Saira Semi Condensed', sans-serif"
  },
  view: {
    position: "relative",
    overflow: "hidden",
  },
  picture: {
    height: "100%",
    width: "100%",
    marginTop: "-20%"
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
  // const [user, setUser] = useState({ username: "", password: "" });
  // const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const { loginWithRedirect } = useAuth0();

  return (
    <Intro>
      <Video />
      <Mask>
        {/* <ProjectCard /> */}
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
            <h4 style={styles.headerF} className="subtext-header mt-2 mb-4">
            This app allows you to create the team of your dreams without any restrictions.
            Select your favorite players from every major league to create your team now!
            </h4>
            <a
              className="btn btn-rounded btn-outline-white"
              data-toggle="modal"
              data-target="#revisa"
              onClick={() => loginWithRedirect()}
            >
              <i className="fas fa-user-edit"></i> Login / Signup
            </a>
          </div>
          <div className="col-md-6 col-sm-12 forma animated fadeInRight">
            <section
              className="text-left px-md-12 mx-md-12 white-text"
              style={styles.sac}
            >
              <img src="images/logoA.png" style={styles.picture}/>
            </section>
          </div>
        </Container>
      </Mask>
    </Intro>
  );
};

export default Register;
