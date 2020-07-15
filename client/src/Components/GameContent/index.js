import React, { useState, useEffect } from 'react'
import "./style.css";
// import ResultBlock from "../components/ResultBlock";
import * as API from '../../utils/API'


const styles = {
  headerB: {
    color: "#04375a" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a' 
  },
  headerD: {
    textAlign: "center",
    marginTop: '77px',
    marginBottom: '40px'
  },
  headerE: {
    marginTop: '77px'
  },
  buttonS: {
    // marginLeft: '20px',
    // marginTop: '0px',
    fontWeight: 'bold'
  },
  listImg: {
    width: "50px",
    height: "50px"
  },
  scores: {
    fontSize: "30px",
    fontWeight: "bolder",
    marginTop: "40px"
  }
}

const playGame = () => {
  console.log("Start a Game")
}


// const renderActions = () => {
//   setTimeout(() => {
//   const gameActionsArray = ['Players warming up', 'Ready to kick off', 'Game started!']  
//   return (
//     {gameActionsArray.map(action => (
//       <li>action player</li>
//     ))}
    
//   )
//   }, 1000)
// }

function GameContent() {

  const [myTeamLocal, setMyteamLocal] = useState([])
  const [myTeamVisit, setMyteamVisit] = useState([])

  const [playerLocal, setPlayerLocal] = useState({})
  const [playerVisit, setPlayerVisit] = useState({})

  // Renders and gets myteams array from the current online user database (API)
  useEffect(() => {
    // For demonstration purposes, we mock an API call. one should render only after finding player (visit)
    API.getTeams().then(res => {

      setMyteamVisit(res[0].myteam)
      setPlayerVisit(res[0])

      console.log('new API simulation Visit:************************')
      console.log(res[0])
    })
    API.getDeveloper().then(res => {

      setMyteamLocal(res.myteam)
      setPlayerLocal(res)

      console.log('new API simulation Local:************************')
      console.log(res)
    })
  }, [])

  return (
    
    <div className=" animated fadeInRight container" style={styles.headerD}>
      <div className="row">
        <div className="col-12">
          <button onclick={playGame()} className="btn btn-outline-warning yellow" style={styles.buttonS}>
            Play a Match{" "}
            <i className="fas fa-futbol light-green-text-2"></i>
          </button>
        </div>

      </div>
      <div className="row" style={styles.headerE}>
        <div className="col-12">
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">GAME SCORE</h2>

            </div>

            <div className="card-body card-body-cascade text-center row">

              <div className="col-3"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/241.png"/> Bar</div>
              <div className="col-2" style={styles.scores}><strong  >0</strong></div>
              <div className="col-2" style={styles.scores}>-</div>
              <div className="col-2" style={styles.scores}><strong >0</strong></div>
              <div className="col-3"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png"/>Rel</div>

            </div>

          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-4">
    
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">Barcelona</h2>
              <p className="card-header-subtitle mb-0">Coach: {playerLocal.fullname}</p>

            </div>

            <ul class="list-group">
              {
                myTeamLocal.map(player => (
                  <li class="list-group-item"><img src={player.player_image} style={styles.listImg} />{player.name}</li> 
                ))
              }
            </ul>
          </div>
      
        </div>
        <div className="col-4">
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">Highlights</h2>
              <p className="card-header-subtitle mb-0">Summary of Important events during the match</p>

            </div>

            <ul class="list-group">
              <li class="list-group-item">00'  Players Warming up</li>
              <li class="list-group-item">00'  Ready to kick off</li>
              <li class="list-group-item">01'  Match started!</li>
              <li class="list-group-item">05'  Corner kick</li>
              <li class="list-group-item">10'  Faul</li>
              <li class="list-group-item">15'  Free kick</li>
              <li class="list-group-item">20'  Faul, yellow card </li>
              <li class="list-group-item">25'  switch players</li>
              <li class="list-group-item">30'  Players Warming up</li>
              <li class="list-group-item">35'  Ready to kick off</li>
              <li class="list-group-item">45'  Match started!</li>
              <li class="list-group-item">50'  Corner kick</li>
              <li class="list-group-item">55'  Faul</li>
              <li class="list-group-item">60'  Free kick</li>
              <li class="list-group-item">65'  Faul, yellow card </li>
              <li class="list-group-item">70'  switch players</li>
              <li class="list-group-item">75'  Faul</li>
              <li class="list-group-item">80'  Free kick</li>
              <li class="list-group-item">85'  Faul, yellow card </li>
              <li class="list-group-item">90'  switch players</li>
            </ul>

          </div>
        </div>
        <div className="col-4">
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">Real Madrid</h2>
              <p className="card-header-subtitle mb-0">Coach: {playerVisit.fullname}</p>

            </div>

            <ul class="list-group">
              {
                myTeamVisit.map(player => (
                  <li class="list-group-item"><img src={player.player_image} style={styles.listImg} />{player.name}</li> 
                ))
              }
            </ul>
            
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default GameContent;
