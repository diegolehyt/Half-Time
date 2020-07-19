import "./style.css";
// import ResultBlock from "../components/ResultBlock";
import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthService from "../../Services/AuthService";

const styles = {
  headerB: {
    color: "#04375a",
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: "#04375a",
  },
  headerD: {
    textAlign: "center",
    marginTop: "77px",
    marginBottom: "40px",
  },
  headerE: {
    marginTop: "77px",
  },
};

function ResultContent() {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();
  const [bool, setBool] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(function(){
        AuthService.register(user).then((data) => {
          const { message } = data;
        });
        
      }, 2000)
    }


  }, [isAuthenticated]);

  function handleUser() {
    console.log("user: ", user.nickname);
    console.log("auth: ", isAuthenticated);
    setBool(true);
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   AuthService.register(user).then((data) => {
  //     const { message } = data;
  //   });
  // };
  return (
    <div className=" animated fadeInRight container" style={styles.headerD}>
      <div className="row">
        <div className="col-4">
          <div className="card card-cascade">
            <div className="view view-cascade gradient-card-header purple-gradient">
              <h2 className="card-header-title mb-3">Marta</h2>
              <p className="card-header-subtitle mb-0">
                Deserve for her own card
              </p>
            </div>
            <button onClick={handleUser}> BUTTON</button>
            <button> SUBMITT</button>
            <div className="card-body card-body-cascade text-center">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
                dignissimos neque rem nihil ratione est placeat vel, natus non
                quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
                dignissimos neque rem nihil ratione est placeat vel, natus non
                quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>

              <hr />

              <a className="px-2 fa-lg tw-ic" href>
                <i className="fab fa-twitter"> </i>
              </a>
              <a className="px-2 fa-lg li-ic" href>
                <i className="fab fa-linkedin-in"> </i>
              </a>
              <a className="px-2 fa-lg fb-ic" href>
                <i className="fab fa-facebook-f"> </i>
              </a>
              <a className="px-2 fa-lg email-ic" href>
                <i className="fas fa-envelope"> </i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="col-12">
            <div className="card card-cascade">
              <div className="view view-cascade gradient-card-header purple-gradient">
                <h2 className="card-header-title mb-3">Marta</h2>
                <p className="card-header-subtitle mb-0">
                  Deserve for her own card
                </p>
              </div>

              <div className="card-body card-body-cascade text-center">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-cascade">
              <div className="view view-cascade gradient-card-header purple-gradient">
                <h2 className="card-header-title mb-3">Marta</h2>
                <p className="card-header-subtitle mb-0">
                  Deserve for her own card
                </p>
              </div>

              <div className="card-body card-body-cascade text-center">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-cascade">
              <div className="view view-cascade gradient-card-header purple-gradient">
                <h2 className="card-header-title mb-3">Marta</h2>
                <p className="card-header-subtitle mb-0">
                  Deserve for her own card
                </p>
              </div>

              <div className="card-body card-body-cascade text-center">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card card-cascade">
            <div className="view view-cascade gradient-card-header purple-gradient">
              <h2 className="card-header-title mb-3">Marta</h2>
              <p className="card-header-subtitle mb-0">
                Deserve for her own card
              </p>
            </div>

            <div className="card-body card-body-cascade text-center">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
                dignissimos neque rem nihil ratione est placeat vel, natus non
                quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
                dignissimos neque rem nihil ratione est placeat vel, natus non
                quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>

              <hr />

              <a className="px-2 fa-lg tw-ic" href>
                <i className="fab fa-twitter"> </i>
              </a>
              <a className="px-2 fa-lg li-ic" href>
                <i className="fab fa-linkedin-in"> </i>
              </a>
              <a className="px-2 fa-lg fb-ic" href>
                <i className="fab fa-facebook-f"> </i>
              </a>
              <a className="px-2 fa-lg email-ic" href>
                <i className="fas fa-envelope"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styles.headerE}>
        <div className="col-12">
          <div className="card card-cascade">
            <div className="view view-cascade gradient-card-header peach-gradient">
              <h2 className="card-header-title mb-3">Marta</h2>
              <p className="card-header-subtitle mb-0">
                Deserve for her own card
              </p>
            </div>

            <div className="card-body card-body-cascade text-center">
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultContent;
