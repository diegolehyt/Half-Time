import "./style.css";
import React, { useState, useEffect } from "react";
import logos from "./teaminfo.json"
import LogoTeam from "../LogoTeam";
// import ResultBlock from "../components/ResultBlock";

const styles = {
  headerB: {
    color: "#04375a"
  },
  infoS: {
    fontSize: "12px",
    marginBottom: "20px"
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a'
  },
  headerD: {
    textAlign: "center",
    marginTop: '100px',
    marginBottom: '40px',
    fontFamily: "'Saira Semi Condensed', sans-serif"
  },
  headerE: {
    marginTop: '77px'
  },
  img1: {
    height: "170px",
    width: "300px"
  },
  shirt: {
    height: "500px",
    widht: "auto"
  },
  img2: {
    height: "",
    width: ""
  },
  secondRow: {
    marginTop: "30px"
  },
  gameTime: {
    fontWeight: "bold",
    marginRight: "20px",
    color: "gold"
  }
}

function InfoContent() {
  const [team, setTeam] = useState()
  const [bool, setbool] = useState(false)

  
  const addLogo = (logoData) => {
 
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${logoData.id}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTeam(res.teams[0])
        console.log(team)
        setbool(true)

      });

  };

  return (
    <>
      <div className=" animated fadeInRight container" style={styles.headerD}>
        <div className="row">
          <div className="col-12">
            <div className="card card-cascade rgba-black-light white-text">

              <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                <h2 className="card-header-title mb-3">POPULAR TEAMS</h2>

              </div>

      
              <div className="col-12">
                <p style={styles.gameTime}>CLICK FOR INFO ABOUT A TEAMS</p>
                {logos.map((logo) => (
                  <LogoTeam onAdd={addLogo} {...logo} />
                ))}
              </div>


            </div>
          </div>
        </div>
        {
          bool 
          ?
          <>
            <div className="row" style={styles.headerE}>
              <div className="col-md-4 col-sm-12" style={styles.secondRow}>
                <div className="row">
                  <img className="img-fluid col-12" src={team.strTeamBadge} alt="Avatar"/>
                  <div className="text-left text-white col-12" style={styles.secondRow}>
                    <h2>Name: {team.strTeam}</h2>
                    <h2>Formed: {team.intFormedYear}</h2>
                    <h2>League: {team.strLeague}</h2>
                  </div>
                </div>
       

                
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="card card-cascade rgba-black-light white-text">

                  <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                    <h2 className="card-header-title mb-3">Stadium Description</h2>

                  </div>

          
                  <div className="col-12">
                    <img className="img-fluid" src={team.strTeamBanner} alt="Avatar"/>
                  </div>
                  <div className="view overlay hm-blue-strong col-12">
                      <img className="img-fluid hm-red-strong" src={team.strStadiumThumb} alt="Avatar"/>
                      <div className="mask page-footer rgba-black-strong d-flex align-items-end">
                        <div className="white-text" style={styles.infoS}>
                          <h5 style={styles.gameTime}>{team.strStadium}</h5>
                          {team.strStadiumDescription}
                        </div>
                      </div>
                  </div>


                </div>
                
              </div>

            </div>
            <div className="row" style={styles.secondRow}>
              <div className="col-12">
                <div className="card card-cascade rgba-black-light white-text">

                  <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                    <h2 className="card-header-title mb-3">About {team.strTeam}</h2>

                  </div>

          
                  <div className="col-12">
                  <p>
                    <img class="float-right img-fluid" src={team.strTeamJersey} alt="shirt" style={styles.shirt}/>
                    <h5 style={styles.gameTime}>{team.strAlternate}</h5>
                    {team.strDescriptionEN}
                  </p>
                  </div>


                </div>
              </div>
            </div>
            <div className="row" style={styles.secondRow}>
              <div className="col-12">
                <div className="card card-cascade rgba-black-light white-text">

                  <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                    <h2 className="card-header-title mb-3">FLIP INFO CARDS</h2>

                  </div>
                  <div className="row">
                    <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="img-fluid" src={team.strTeamFanart1} alt="Avatar" style={styles.img1}/>
                        </div>
                        <div className="flip-card-back">
                          <h1 className="amber-text">Stadium</h1>
                          <p>Name: {team.strStadium}</p>
                          <p>Location: {team.strStadiumLocation}</p>
                          <p>Capacity: {team.intStadiumCapacity}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="img-fluid" src={team.strTeamFanart2} alt="Avatar" style={styles.img1}/>
                        </div>
                        <div className="flip-card-back">
                          <h1 className="amber-text">Current Events</h1>
                          <p>{team.strLeague}</p>
                          <p>{team.strLeague2}</p>
                          <p>{team.strLeague3}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="img-fluid" src={team.strTeamFanart3} alt="Avatar" style={styles.img1}/>
                        </div>
                        <div className="flip-card-back">
                          <h1 className="amber-text">Social</h1>
                          <a href={"https://" + team.strFacebook} className="btn btn-sm btn-fb primary-color-dark wave-effect" target="_blank" rel='noopener noreferrer'><i className="fab fa-facebook-f pr-1"></i>Facebook</a>
                          <a href={"https://" + team.strTwitter} className="btn btn-sm btn-fb blue wave-effect" target="_blank" rel='noopener noreferrer'><i className="fab fa-twitter pr-1"></i>Twitter</a>
                          <a href={"https://" + team.strInstagram} className="btn btn-sm btn-fb purple wave-effect" target="_blank" rel='noopener noreferrer'><i className="fab fa-instagram pr-1"></i>Instagram</a>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img className="img-fluid" src={team.strTeamFanart4} alt="Avatar" style={styles.img1}/>
                        </div>
                        <div className="flip-card-back">
                          <h1 className="amber-text">{team.strTeam}</h1>
                          <a href={"https://" + team.strWebsite} className="btn btn-sm btn-fb special-color-dark wave-effect" target="_blank" rel='noopener noreferrer'><i className="fas fa-window-maximize pr-1"></i>Website</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </>
          
        :
        <img src="images/logoA.png"/>
      }

    </div>


  </>
  )
}

export default InfoContent;
