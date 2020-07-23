import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";


const styles = {
  cardColor: {
    backgroundImage: "red"
  },
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
    marginTop: '100px',
    marginBottom: '40px',
    fontFamily: "'Saira Semi Condensed', sans-serif"
  },
  headerE: {
    marginTop: '10px'
  },
  headerF: {
    fontFamily: "'Saira Semi Condensed', sans-serif"
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
  },
  scores2: {
    fontSize: "50px",
    fontWeight: "bolder",
    marginTop: "10px",
    marginBottom: "0px"
  },
  scores3: {
    fontSize: "40px",
    fontWeight: "bolder",
    marginTop: "-10px"
  },
  gameImg: {
    width: "20px",
    height: "20px",
    marginRight: "5px"
  },
  gameTime: {
    fontWeight: "bold",
    marginRight: "20px",
    color: "gold"
  },
  gameLogo: {
    width: "150px",
    height: "150px"
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
  // Get DATA
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();
  const [objId, setObjId] = useState("");

  const [bool, setBool] = useState(false)
  const [visitBool, setVisitBool] = useState(false)
  const [live, setLive] = useState(true)

  const [scoreL, setScoreL] = useState("0")
  const [scoreV, setScoreV] = useState("0")

  const [goal, setGoal] = useState(false)
  // const [result, setResult] = useState()

  const [myTeamLocal, setMyteamLocal] = useState([])
  const [myTeamVisit, setMyteamVisit] = useState([])

  const [playerLocal, setPlayerLocal] = useState({})
  const [playerVisit, setPlayerVisit] = useState({})

  const [ratingL, setRatingL] = useState()
  const [ratingV, setRatingV] = useState()


  // COMMENTS
  const [comment00A, setComment00A] = useState()
  const [comment00B, setComment00B] = useState()
  const [comment00, setComment00] = useState()
  const [comment05, setComment05] = useState()
  const [comment10, setComment10] = useState()
  const [comment15, setComment15] = useState()
  const [comment20, setComment20] = useState()
  const [comment25, setComment25] = useState()
  const [comment30, setComment30] = useState()
  const [comment35, setComment35] = useState()
  const [comment40, setComment40] = useState()
  const [comment45, setComment45] = useState()
  const [comment50, setComment50] = useState()
  const [comment55, setComment55] = useState()
  const [comment60, setComment60] = useState()
  const [comment65, setComment65] = useState()
  const [comment70, setComment70] = useState()
  const [comment75, setComment75] = useState()
  const [comment80, setComment80] = useState()
  const [comment85, setComment85] = useState()
  const [comment90, setComment90] = useState()
  const [comment90A, setComment90A] = useState()

  // getting all DATA
  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(function(){
        fetch("/api/users/")
        .then(function (response) {
          return response.json();
        })
        .then(function (res) {
          // console.log(res[0].name)
          // setMyteamVisit(res[0].myteam)
          // setPlayerVisit(res[0])
          
          const onlineUser = res.find((playerX) => playerX.sub === user.sub);
          // console.log(onlineUser._id);
          setObjId(onlineUser._id)
          
          fetch(`/api/users/${onlineUser._id}`)
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            // console.log(res)
            setMyteamLocal(res.myteam)
            setPlayerLocal(res)

            let randomPlayer = Math.floor(Math.random() * 11);
            console.log(res.myteam[randomPlayer].rating_overall)
            setRatingL(res.myteam[randomPlayer].rating_overall)
          });
        });
        
      }, 1000)
      
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!visitBool) {
      setTimeout(function(){
        fetch("/api/users/")
        .then(function (response) {
          return response.json();
        })
        .then(function (res) {
          let resB = res.filter(
            (playerZ) => playerZ.name !== playerLocal.name
          );
          let random = Math.floor(Math.random() * resB.length);
          console.log(random)
          
          fetch(`/api/users/${resB[random]._id}`)
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            setMyteamVisit(res.myteam)
            setPlayerVisit(res)

            let randomPlayer = Math.floor(Math.random() * 11);
            console.log(res.myteam[randomPlayer].rating_overall)
            setRatingV(res.myteam[randomPlayer].rating_overall)

            // setResult(ratingL - ratingV)
          });
        });
        
      }, 0)
      
    }
  }, [isAuthenticated, visitBool]);


  useEffect(() => {
    // setBool(false)
    // setTimeout(function(){
    //   console.log('HOLA useEffect 2 ------------+++++')
    // }, 5000)

  }, [setComment00A])

  const addComments = () => {
    // Reset all comments
    let result = (ratingL - ratingV)
    // let visitor = myTeamVisit
    // console.log(visitor)
    setScoreL("0")
    setScoreV("0")
    setVisitBool(false)
    setComment00A()
    setComment00B()
    setComment00()
    setComment05()
    setComment10()
    setComment15()
    setComment20()
    setComment25()
    setComment30()
    setComment35()
    setComment40()
    setComment45()
    setComment50()
    setComment55()
    setComment60()
    setComment65()
    setComment70()
    setComment75()
    setComment80()
    setComment85()
    setComment90()
    setComment90A()

    // Match Begins
    setBool(true)
    setTimeout(function () {
      setVisitBool(true)
      setBool(false)
      if (result > 0) {
        setComment00A(<li class='list-group-item text-center rgba-black-light'>***PLAYER FOUNDED***</li>)
      }
      else if (result === 0) {

        setComment00A(<li class='list-group-item text-center rgba-black-light'>***PLAYER FOUNDED***</li>)
      }
      else {

        setComment00A(<li class='list-group-item text-center rgba-black-light'>***PLAYER FOUNDED***</li>)
      }
    }, 3000)
    setTimeout(function () {
      if (result > 0) {
        setComment00B(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span> Players Warming up</li>)
      }
      else if (result === 0) {
        setComment00B(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span> Players Warming up</li>)
      }
      else {
        setComment00B(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span> Players Warming up</li>)
      }
    }, 4000)
    setTimeout(function () {
      if (result > 0) {
        setComment00(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span><img src="images/ref.png" style={styles.gameImg} />Kick-Off</li>)
      }
      else if (result === 0) {
        setComment00(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span><img src="images/ref.png" style={styles.gameImg} />Kick-Off</li>)
      }
      else {
        setComment00(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>00'</span><img src="images/ref.png" style={styles.gameImg} />Kick-Off</li>)
      }
    }, 5000)
    setTimeout(function () {

      if (result > 0) {
        setComment05(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>05'</span><img src="images/yellow.png" style={styles.gameImg} />Foul {myTeamLocal[2].name} Yellow Card</li>)
      }
      else if (result === 0) {
        setComment05(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>05'</span><img src="images/yellow.png" style={styles.gameImg} />Foul {myTeamLocal[2].name} Yellow Card</li>)
      }
      else {
        setComment05(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>05'</span><img src="images/corner.png" style={styles.gameImg} /> Corner-Kick</li>)
      }
    }, 6000)
    setTimeout(function () {
      if (result > 0) {
        setComment10(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>10'</span><img src="images/corner.png" style={styles.gameImg} /> Corner-Kick</li>)
      }
      else if (result === 0) {
        setComment10(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>10'</span><img src="images/corner.png" style={styles.gameImg} /> Corner-Kick</li>)
      }
      else {
        setComment10(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>10'</span><img src="images/ref.png" style={styles.gameImg} /> Offside </li>)
      }
    }, 7000)
    setTimeout(function () {
      if (result > 0) {
        setComment15(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>15'</span> Attempt missed {myTeamVisit[5].name}</li>)
      }
      else if (result === 0) {
        setComment15(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>15'</span>Attempt missed {myTeamVisit[5].name}</li>)
      }
      else {
        setComment15(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>15'</span> Attempt missed {myTeamVisit[5].name}</li>)
      }
    }, 8000)
    setTimeout(function () {
      if (result > 0) {
        setComment20(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>20'</span>Free-kick close to the net {myTeamVisit[7].name}</li>)
      }
      else if (result === 0) {
        setComment20(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>20'</span>Free-kick close to the net {myTeamVisit[7].name}</li>)
      }
      else {
        setComment20(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>20'</span> Header by {myTeamVisit[7].name}</li>)
      }
    }, 9000)
    setTimeout(function () {
      if (result > 0) {
        setComment25(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>25'</span><img src="images/goal.png" style={styles.gameImg} />{myTeamLocal[6].name} GOAL!</li>)
        setScoreL("1")
        setGoal(true)
      }
      else if (result === 0) {
        setComment25(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>25'</span><img src="images/goal.png" style={styles.gameImg} />{myTeamLocal[6].name} GOAL!</li>)
        setScoreL("1")
        setGoal(true)
      }
      else {
        setComment25(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>25'</span>Attempt missed {myTeamVisit[6].name}</li>)
      }
    }, 10000)
    setTimeout(function () {
      if (result > 0) {
        setGoal(false)
        setComment30(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>30'</span>Head-shot {myTeamVisit[9].name}</li>)
      }
      else if (result === 0) {
        setGoal(false)
        setComment30(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>30'</span> Miss {myTeamVisit[9].name}</li>)
      }
      else {
        setComment30(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>30'</span> Miss {myTeamVisit[9].name}</li>)
      }
    }, 11000)
    setTimeout(function () {
      if (result > 0) {
        setComment35(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>35'</span><img src="images/corner.png" style={styles.gameImg} />Corner-kick</li>)
      }
      else if (result === 0) {
        setComment35(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>35'</span> <img src="images/corner.png" style={styles.gameImg} />Corner-kick</li>)
      }
      else {
        setComment35(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>35'</span> Attempt Missed by {myTeamLocal[1].name} </li>)
      }
    }, 12000)
    setTimeout(function () {
      if (result > 0) {
        setComment40(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>40'</span><img src="images/goal.png" style={styles.gameImg} />GOAL! {myTeamVisit[2].name}</li>)
        setScoreV("1")
        setGoal(true)
      }
      else if (result === 0) {
        setComment40(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>40'</span><img src="images/goal.png" style={styles.gameImg} />GOAL! {myTeamVisit[2].name}</li>)
        setScoreV("1")
        setGoal(true)
      }
      else {
        setComment40(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>40'</span><img src="images/goal.png" style={styles.gameImg} />GOAL! {myTeamVisit[2].name}</li>)
        setScoreV("1")
        setGoal(true)
      }
    }, 13000)
    setTimeout(function () {
      if (result > 0) {
        setGoal(false)
        setComment45(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span><img src="images/ref.png" style={styles.gameImg} /> Halftime </li>)
      }
      else if (result === 0) {
        setGoal(false)
        setComment45(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span><img src="images/ref.png" style={styles.gameImg} /> Halftime </li>)
      }
      else {
        setGoal(false)
        setComment45(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span><img src="images/ref.png" style={styles.gameImg} /> Halftime </li>)
      }
    }, 14000)
    setTimeout(function () {
      if (result > 0) {
        setComment50(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span> Second Half Begins</li>)
      }
      else if (result === 0) {
        setComment50(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span> Second Half Begins</li>)
      }
      else {
        setComment50(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>45'</span> Second Half Begins</li>)
      }
    }, 15000)
    setTimeout(function () {
      if (result > 0) {
        setComment55(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>50'</span> Miss {myTeamVisit[3].name}</li>)
      }
      else if (result === 0) {
        setComment55(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>50'</span> Long-shot {myTeamVisit[3].name}</li>)
      }
      else {
        setComment55(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>50'</span> Miss {myTeamVisit[3].name}</li>)
      }
    }, 16000)
    setTimeout(function () {
      if (result > 0) {
        setComment60(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>55'</span> <img src="images/yellow.png" style={styles.gameImg} />Foul {myTeamVisit[7].name} is shown the yellow card</li>)
      }
      else if (result === 0) {
        setComment60(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>55'</span><img src="images/yellow.png" style={styles.gameImg} /> Foul {myTeamVisit[7].name} is shown the yellow card</li>)
      }
      else {
        setComment60(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>55'</span> <img src="images/yellow.png" style={styles.gameImg} />Foul  {myTeamVisit[7].name} is shown the yellow card </li>)
      }
    }, 17000)
    setTimeout(function () {
      if (result > 0) {
        setComment65(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>60'</span> <img src="images/goal.png" style={styles.gameImg} />GOAL by {myTeamLocal[4].name}</li>)
        setScoreL("2")
        setGoal(true)
      }
      else if (result === 0) {
        setComment65(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>60'</span> Good defense by {myTeamLocal[4].name}</li>)
      }
      else {
        setComment65(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>60'</span> Foul by {myTeamVisit[4].name} is shown the yellow card</li>)
      }
    }, 18000)
    setTimeout(function () {
      if (result > 0) {
        setGoal(false)
        setComment70(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>65'</span> Long shot {myTeamVisit[5].name}</li>)
      }
      else if (result === 0) {
        setComment70(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>65'</span> Miss {myTeamVisit[5].name}</li>)
      }
      else {
        setComment70(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>65'</span> Long shot {myTeamVisit[5].name}</li>)
      }
    }, 19000)
    setTimeout(function () {
      if (result > 0) {
        setComment75(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>70'</span><img src="images/corner.png" style={styles.gameImg} /> Corner Kick</li>)
      }
      else if (result === 0) {
        setComment75(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>70'</span><img src="images/corner.png" style={styles.gameImg} />Corner Kick</li>)
      }
      else {
        setComment75(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>70'</span><img src="images/corner.png" style={styles.gameImg} />Corner Kick</li>)
      }
    }, 20000)
    setTimeout(function () {
      if (result > 0) {
        setGoal(false)
        setComment80(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>75'</span> Headshot close to the net {myTeamVisit[9].name}</li>)
      }
      else if (result === 0) {
        setComment80(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>75'</span> Headshot close to the net {myTeamVisit[9].name}</li>)
      }
      else {
        setComment80(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>75'</span> Headshot close to the net {myTeamVisit[9].name}</li>)
      }
    }, 21000)
    setTimeout(function () {
      if (result > 0) {
        setComment85(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>80'</span><img src="images/ref.png" style={styles.gameImg} /> Offside</li>)
      }
      else if (result === 0) {
        setComment85(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>80'</span> Attempt Saved! </li>)
      }
      else {
        setComment85(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>80'</span> Attempt Missed! {myTeamLocal[4].name}</li>)
      }
    }, 22000)
    setTimeout(function () {
      if (result > 0) {
        setComment90(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>85'</span> Interception {myTeamLocal[8].name}</li>)
      }
      else if (result === 0) {
        setComment90(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>85'</span> Attempt Missed by {myTeamLocal[8].name} </li>)
      }
      else {
        setComment90(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>85'</span> <img src="images/red.png" style={styles.gameImg} />Foul! {myTeamVisit[7].name} is shown the RED Card!!!</li>)
      }
    }, 23000)
    setTimeout(function () {

      if (result > 0) {
        setComment90A(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>90'</span> <img src="images/ref.png" style={styles.gameImg} />Second Half Ends!    You WIN!      2 - 1</li>)
      }
      else if (result === 0) {
        setComment90A(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>90'</span> <img src="images/ref.png" style={styles.gameImg} />Second Half Ends!    You TIE!      1 - 1</li>)
      }
      else {
        setComment90A(<li class="list-group-item rgba-black-light"><span style={styles.gameTime}>90'</span> <img src="images/ref.png" style={styles.gameImg} />Second Half Ends!    You LOSE!      0 - 1</li>)
      }
    }, 24000)

  }
  // ----*****---***
  const visit = () => {
    return (
      <>
        {
          myTeamVisit.map(player => (
            <li class="list-group-item rgba-black-slight"><img src={player.player_image} style={styles.listImg} />{player.name}</li> 
          ))
        }

      </>
    );
  };

  const loader = () => {
    return (
      <>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <p className="text-warning bold animated heartBeat infinite">Finding Player</p>

      </>
    );
  };

  useEffect(() => {
    if(live) {
      setLive(false)
    }
    else {
      setLive(true)
    }
  }, [comment90A])

  return (
    
    <div className=" animated fadeInRight container" style={styles.headerD}>

      <div className="row">
        <div className="col-12">
          <h2 className="card-header-title mb-3 amber-text">PLAY A GAME</h2>
          {
            bool
            ?
              ""
            :
              <button onClick={addComments} className="btn btn-outline-warning yellow" style={styles.buttonS}>
                PLAY{" "}
                  <i className="animated fa-spin fas fa-futbol light-green-text-2"></i>
              </button>
            
          }

        </div>

      </div>

 
      {bool ? loader() : ""}

      <div className="row" style={styles.headerE}>
        <div className="col-12">
          <div className="card card-cascade rgba-black-light white-text">

            <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

              <h2 className="card-header-title mb-3">GAME SCORE</h2>

            </div>

            <div className="card-body card-body-cascade text-center row">

              <div className="col-12 col-sm-3"><div>{playerLocal.teamName}</div><img src={playerLocal.teamLogo} style={styles.gameLogo}/></div>

              
              {visitBool 
              ? 
                <>
                  <div className="col-4 col-sm-2" style={styles.scores}><strong  >{scoreL}</strong></div>
                  <div className="col-4 col-sm-2" style={styles.scores2}>
                    {
                      live
                      ?
                      <h4 className="grey-text">• LIVE</h4>
                      :
                      <h4 className="animated pulse infinite red-text glow">• LIVE</h4>
                    }
                    <div style={styles.scores2}>-</div>
                  </div>
                  <div className="col-4 col-sm-2" style={styles.scores}><strong >{scoreV}</strong></div>
                  <div className="col-12 col-sm-3"><div>{playerVisit.teamName}</div><img src={playerVisit.teamLogo} style={styles.gameLogo}/></div>
                </>  
              : ""}
              

            </div>

          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12 col-lg-3">
    
          <div className="card card-cascade white-text rgba-black-light">

            <div className="view view-cascade gradient-card-header rgba-purple-light darken-3 text-white">

              <h2 className="card-header-title mb-3">{playerLocal.teamName}</h2>
              <p className="card-header-subtitle mb-0">Coach: {playerLocal.name}</p>

            </div>

            <ul class="list-group text-left">
              {
                myTeamLocal.map(player => (
                  <div class="list-group-item rgba-black-slight"><img src={player.player_image} style={styles.listImg} />{player.name}</div> 
                ))
              }
            </ul>
          </div>
      
        </div>
        <div className="col-md-12 col-lg-6">
          {goal 
          ?
            <div className="goal row">
              <div className="col-12 text-center animated tada amber-text" style={styles.headerC}>GOOOAL!!!!</div>
            </div>
          : ""}


          <div className="card card-cascade white-text rgba-black-light">

            <div className="view view-cascade gradient-card-header rgba-purple-light darken-3 text-white">

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
              {comment60}
              {comment65}
              {comment70}
              {comment75}
              {comment80}
              {comment85}
              {comment90}
              {comment90A}
            </ul>

          </div>
        </div>
        <div className="col-md-12 col-lg-3">
          <div className="card card-cascade white-text rgba-black-light">

            <div className="view view-cascade gradient-card-header rgba-purple-light darken-3 text-white">

              <h2 className="card-header-title mb-3">{visitBool ? playerVisit.teamName : "VISITOR TEAM"}</h2>
              <p className="card-header-subtitle mb-0">Coach: {visitBool ? playerVisit.name : "VISITOR COACH"}</p>

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
