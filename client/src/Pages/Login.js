import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import { AuthContext } from "../Context/AuthContext";

import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive"
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  vidddeo: {
    position: 'fixed',
    maxHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '10%',
    height: '100%'
  },
  sic: {
    maxHeight: '100%'
  },
  sac: {
    marginTop: '10%'
  }
}

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/myteam");
      } else setMessage(message);
    });
  };

  return (
    <Intro>
      <Video/>
      <Mask>
      
        <Container>
          {/* <form onSubmit={onSubmit}>
            <h3>Sign in</h3>
            <label htmlFor="username" className="sr-only">
              Username:
            </label>
            <input
              type="text"
              name="username"
              onChange={onChange}
              className="form-control"
              placeholder="Enter Username"
            />
            <label htmlFor="password" className="sr-only">
              Password:
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              className="form-control"
              placeholder="Enter Password"
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
          {message ? <Message message={message} /> : null} */}




          <div className="col-md-6 col-sm-12 forma animated fadeInRight" style={styles.sac}>
            <section className="text-left px-md-12 mx-md-12 white-text">

              <h3 className="font-weight-bold mb-4">Sign in</h3>
              
              <div className="row">
          
              
                <div className="col-md-12 mb-md-12 mb-12">
          
                  <form onSubmit={onSubmit}>
                    
                    <div className="row">

                      
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input 
                            className="form-control white-text"
                            type="text"
                            name="username"
                            onChange={onChange}
                          />
                          <label htmlFor="username" className="white-text">Username</label>
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
                          <label htmlFor="password" className="white-text">Password</label>
                        </div>
                      </div>
                      

                    </div>
                    <button className="btn btn-primary btn-md btn-rounded btn-outline-white" type="submit">
                      Login
                    </button>
                    
          
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

export default Login;
