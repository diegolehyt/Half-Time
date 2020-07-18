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
    fontSize: '50px',
    fontWeight: '10px',
    shadowText: '2px 2px black'
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
    fontSize: "60px",
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
  const [bool, setBool] = useState(false)
  const [visitBool, setVisitBool] = useState(false)

  const [scoreL, setScoreL] = useState("0")
  const [scoreV, setScoreV] = useState("0")

  const [goal, setGoal] = useState(false)

  const [myTeamLocal, setMyteamLocal] = useState([])
  const [myTeamVisit, setMyteamVisit] = useState([])

  const [playerLocal, setPlayerLocal] = useState({})
  const [playerVisit, setPlayerVisit] = useState({})

  // COMMENTS
  const [comment00A, setComment00A] = useState()
  const [comment00B, setComment00B] = useState()
  const [comment00, setComment00] = useState()
  const [comment05, setComment05] = useState()
  const [comment10, setComment10] = useState()
  const [comment15, setComment15] = useState()
  const [comment20, setComment20] = useState()
  const [comment25, setComment25] = useState()
  const [comment30, setComment30] = useState("")
  const [comment35, setComment35] = useState("")
  const [comment40, setComment40] = useState("")
  const [comment45, setComment45] = useState("")
  const [comment50, setComment50] = useState("")
  const [comment55, setComment55] = useState("")
  const [comment60, setComment60] = useState("")
  const [comment65, setComment65] = useState("")
  const [comment70, setComment70] = useState("")
  const [comment75, setComment75] = useState("")
  const [comment80, setComment80] = useState("")
  const [comment85, setComment85] = useState("")
  const [comment90, setComment90] = useState("")


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

  useEffect(() => {
    // setBool(false)
    // setTimeout(function(){
    //   console.log('HOLA useEffect 2 ------------+++++')
    // }, 5000)

  }, [setComment00A])

  const addComments = () => {

    setBool(true)
    setTimeout(function(){
      setBool(false)
     setComment00A(<li class='list-group-item text-center'>***PLAYER FOUNDED***</li>)
      
    }, 3000)
    setTimeout(function(){
      setVisitBool(true)
      setComment00B(<li class="list-group-item">00' Players Warming up</li>)
    }, 6000)
    setTimeout(function(){
      setComment00(<li class="list-group-item">00'  Kick-Off</li>)
    }, 9000)
    setTimeout(function(){
      setComment05(<li class="list-group-item">05' Faul {myTeamVisit[0].name}</li>)
    }, 12000)
    setTimeout(function(){
      setComment10(<li class="list-group-item">10' Corner-kick</li>)
    }, 15000)
    setTimeout(function(){
      setComment15(<li class="list-group-item">15' Miss {myTeamVisit[9].name}</li>)
    }, 18000)
    setTimeout(function(){
      setComment20(<li class="list-group-item">20' Free-kick close to the net</li>)
    }, 21000)
    setTimeout(function(){
      setComment25(<li class="list-group-item">25' GOAL! {myTeamLocal[5].name}</li>)
      setScoreL("1")
      setGoal(true)
    }, 24000)
    setTimeout(function(){
      setGoal(false)
      setComment30(<li class="list-group-item">30' Head-shot {myTeamVisit[2].name}</li>)
    }, 27000)
    setTimeout(function(){
      setComment35(<li class="list-group-item">35' Corner-kick</li>)
    }, 30000)
    setTimeout(function(){
      setComment40(<li class="list-group-item">45' GOAL! {myTeamVisit[0].name}</li>)
      setScoreV("1")
      setGoal(true)
    }, 33000)
    setTimeout(function(){
      setGoal(false)
      setComment45(<li class="list-group-item"></li>)
    }, 36000)
    setTimeout(function(){
      setComment50(<li class="list-group-item"></li>)
    }, 39000)
    setTimeout(function(){
      setComment55(<li class="list-group-item">00'  Players Warming up</li>)
    }, 42000)
    setTimeout(function(){
      setComment60("")
    }, 45000)
    setTimeout(function(){
      setComment65("")
    }, 22000)
    setTimeout(function(){
      setComment70("")
    }, 25000)
    setTimeout(function(){
      setComment75("")
    }, 28000)
    setTimeout(function(){
      setComment80("")
    }, 31000)
    setTimeout(function(){
      setComment85("")
    }, 34000)
    setTimeout(function(){
      setComment90("")
    }, 37000)

  }

  // ----*****---***
  const visit = () => {
    return (
      <>
        {
          myTeamVisit.map(player => (
            <li class="list-group-item"><img src={player.player_image} style={styles.listImg} />{player.name}</li> 
          ))
        }

      </>
    );
  };

  const loader = () => {
    return (
      <>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p className="text-secondary bold animated heartBeat slower">Finding Player</p>

      </>
    );
  };

  return (
    
    <div className=" animated fadeInRight container" style={styles.headerD}>

      <div className="row">
        <div className="col-12">
          <h2 className="card-header-title mb-3 amber-text">PLAY A GAME</h2>
          {/* <button onClick={playGame} className="btn btn-outline-warning yellow" style={styles.buttonS}>
            Play a Match{" "}
            <i className="fas fa-futbol light-green-text-2"></i>
          </button> */}
          <button onClick={addComments} className="btn btn-outline-warning yellow" style={styles.buttonS}>
            PLAY{" "}
            <i className="fas fa-futbol light-green-text-2"></i>
          </button>
        </div>

      </div>

 
      {bool ? loader() : ""}

      <div className="row" style={styles.headerE}>
        <div className="col-12">
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">GAME SCORE</h2>

            </div>

            <div className="card-body card-body-cascade text-center row">

              <div className="col-3"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/241.png"/> Bar</div>

              
              {visitBool 
              ? 
                <>
                  <div className="col-2" style={styles.scores}><strong  >{scoreL}</strong></div>
                  <div className="col-2" style={styles.scores}>-</div>
                  <div className="col-2" style={styles.scores}><strong >{scoreV}</strong></div>
                  <div className="col-3"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png"/>Rel</div>
                </>  
              : ""}
              

            </div>

          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-3">
    
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">Barcelona</h2>
              <p className="card-header-subtitle mb-0">Coach: {playerLocal.fullname}</p>

            </div>

            <ul class="list-group text-left">
              {
                myTeamLocal.map(player => (
                  <li class="list-group-item"><img src={player.player_image} style={styles.listImg} />{player.name}</li> 
                ))
              }
            </ul>
          </div>
      
        </div>
        <div className="col-6">
          {goal 
          ?
            <div className="goal row">
              <div className="col-12 text-center animated tada amber-text" style={styles.headerC}>GOOOAL!!!!</div>
            </div>
          : ""}


          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">Highlights</h2>
              <p className="card-header-subtitle mb-0">Summary of Important events during the match</p>

            </div>

            <ul class="list-group text-left">
              {comment00A}
              {comment00B}
              {comment00}
              {comment05}
              {comment10}
              {comment15}
              {comment20}
              {comment25}
              {comment30}
              {comment35}
              {comment40}
              {comment45}
              {comment50}
              {comment55}
            </ul>

          </div>
        </div>
        <div className="col-3">
          <div className="card card-cascade">

            <div className="view view-cascade gradient-card-header purple darken-3 text-white">

              <h2 className="card-header-title mb-3">{visitBool ? "Real Madrid" : "VISITOR TEAM"}</h2>
              <p className="card-header-subtitle mb-0">Coach: {visitBool ? playerVisit.fullname : "VISITOR COACH"}</p>

            </div>

            <ul class="list-group text-left">
             {visitBool ? visit() : ""}
     
            </ul>
            
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default GameContent;
