import React, { useState, useEffect } from 'react'
import "./style.css";
import players from "./players.json"
import PlayerCard from "../PlayerCard/index"

import * as API from '../../utils/API'

const styles = {
  headerB: {
    width: "",
    height: ""
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a' 
  },
  headerD: {
    fontFamily: "'Saira Semi Condensed', sans-serif",
    textAlign: "center",
    marginTop: '77px',
    marginBottom: '70px',
    height: "140vh",
    width: "100vh"
  },
  headerE: {
    width: "300px",
    height: '300px'
  }
}



// useEffect (()=> {
//   fetch('https://localhost/3000/api/online', { mode: 'no-cors' })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {


//     console.log(data);
//   });
// }, [])



function MyTeamContent() {

  // const [player, setPlayer] = useState({})

  const [myTeam, setMyteam] = useState([])

  const [player1, setPlayer1] = useState({})
  const [player2, setPlayer2] = useState({})
  const [player3, setPlayer3] = useState({})
  const [player4, setPlayer4] = useState({})
  const [player5, setPlayer5] = useState({})
  const [player6, setPlayer6] = useState({})
  const [player7, setPlayer7] = useState({})
  const [player8, setPlayer8] = useState({})
  const [player9, setPlayer9] = useState({})
  const [player10, setPlayer10] = useState({})
  const [player11, setPlayer11] = useState({})

  const myTEAM = []

  // Renders and gets myteams array from the current online user database (API)
  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getDeveloper().then(res => {
      setPlayer1(res.myteam[0])
      setPlayer2(res.myteam[1])
      setPlayer3(res.myteam[2])
      setPlayer4(res.myteam[3])
      setPlayer5(res.myteam[4])
      setPlayer6(res.myteam[5])
      setPlayer7(res.myteam[6])
      setPlayer8(res.myteam[7])
      setPlayer9(res.myteam[8])
      setPlayer10(res.myteam[9])
      setPlayer11(res.myteam[10])
      
      setMyteam(res.myteam)

      console.log('Developer State:')
      // console.log(res.myteam)
      console.log(myTEAM)
    })
  }, [])

  const handleSubmit = function () {
    API.getDeveloper().then(res => {
      setMyteam(res)
      console.log('Developer State:')
      console.log(res.myteam)
    })

  }

  return (
    
    <div  style={styles.headerD} className="col-12 bcImg img-fluid">


      {/* <li>{players[0].name} <button onClick={()=>setPlayer(players[0])} > add </button> </li> */}

      <button onClick={()=>handleSubmit()}>
        API
      </button>

      <p>{player1.name}</p>
      <p>{player2.name}</p>
      {/* <p>{myTeam[0].name}</p> */}
      {/* <p>{myTeam[2].name}</p> */}

      {myTeam.map(playerT => (
        <PlayerCard
          id={playerT.id}
          name={playerT.name}
          position={playerT.position}
          player_image={playerT.player_image}
          nation_image={playerT.nation_image}
          club_image={playerT.club_image}
          overall={playerT.rating_overall}
          pace={playerT.rating_pace}
          shooting={playerT.rating_shooting}
          passing={playerT.rating_passing}
          dribbling={playerT.rating_dribbling}
          defense={playerT.rating_defense}
          physical={playerT.rating_physical}
        />
      ))}



      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={player1.id}
          name={player1.name}
          position={player1.position}
          player_image={player1.player_image}
          nation_image={player1.nation_image}
          club_image={player1.club_image}
          overall={player1.rating_overall}
          pace={player1.rating_pace}
          shooting={player1.rating_shooting}
          passing={player1.rating_passing}
          dribbling={player1.rating_dribbling}
          defense={player1.rating_defense}
          physical={player1.rating_physical}
        /> 
        <PlayerCard
          id={player2.id}
          name={player2.name}
          position={player2.position}
          player_image={player2.player_image}
          nation_image={player2.nation_image}
          club_image={player2.club_image}
          overall={player2.rating_overall}
          pace={player2.rating_pace}
          shooting={player2.rating_shooting}
          passing={player2.rating_passing}
          dribbling={player2.rating_dribbling}
          defense={player2.rating_defense}
          physical={player2.rating_physical}
        />
        <PlayerCard
          id={players[2].id}
          name={players[2].name}
          position={players[2].position}
          player_image={players[2].player_image}
          nation_image={players[2].nation_image}
          club_image={players[2].club_image}
          overall={players[2].rating_overall}
          pace={players[2].rating_pace}
          shooting={players[2].rating_shooting}
          passing={players[2].rating_passing}
          dribbling={players[2].rating_dribbling}
          defense={players[2].rating_defense}
          physical={players[2].rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={players[3].id}
          name={players[3].name}
          position={players[3].position}
          player_image={players[3].player_image}
          nation_image={players[3].nation_image}
          club_image={players[3].club_image}
          overall={players[3].rating_overall}
          pace={players[3].rating_pace}
          shooting={players[3].rating_shooting}
          passing={players[3].rating_passing}
          dribbling={players[3].rating_dribbling}
          defense={players[3].rating_defense}
          physical={players[3].rating_physical}
        />
        <PlayerCard
          id={players[4].id}
          name={players[4].name}
          position={players[4].position}
          player_image={players[4].player_image}
          nation_image={players[4].nation_image}
          club_image={players[4].club_image}
          overall={players[4].rating_overall}
          pace={players[4].rating_pace}
          shooting={players[4].rating_shooting}
          passing={players[4].rating_passing}
          dribbling={players[4].rating_dribbling}
          defense={players[4].rating_defense}
          physical={players[4].rating_physical}
        />
        <PlayerCard
        id={players[5].id}
        name={players[5].name}
        position={players[5].position}
        player_image={players[5].player_image}
        nation_image={players[5].nation_image}
        club_image={players[5].club_image}
        overall={players[5].rating_overall}
        pace={players[5].rating_pace}
        shooting={players[5].rating_shooting}
        passing={players[5].rating_passing}
        dribbling={players[5].rating_dribbling}
        defense={players[5].rating_defense}
        physical={players[5].rating_physical}
        />
        <PlayerCard
        id={players[6].id}
        name={players[6].name}
        position={players[6].position}
        player_image={players[6].player_image}
        nation_image={players[6].nation_image}
        club_image={players[6].club_image}
        overall={players[6].rating_overall}
        pace={players[6].rating_pace}
        shooting={players[6].rating_shooting}
        passing={players[6].rating_passing}
        dribbling={players[6].rating_dribbling}
        defense={players[6].rating_defense}
        physical={players[6].rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={players[7].id}
          name={players[7].name}
          position={players[7].position}
          player_image={players[7].player_image}
          nation_image={players[7].nation_image}
          club_image={players[7].club_image}
          overall={players[7].rating_overall}
          pace={players[7].rating_pace}
          shooting={players[7].rating_shooting}
          passing={players[7].rating_passing}
          dribbling={players[7].rating_dribbling}
          defense={players[7].rating_defense}
          physical={players[7].rating_physical}
        />
        <PlayerCard
          id={players[8].id}
          name={players[8].name}
          position={players[8].position}
          player_image={players[8].player_image}
          nation_image={players[8].nation_image}
          club_image={players[8].club_image}
          overall={players[8].rating_overall}
          pace={players[8].rating_pace}
          shooting={players[8].rating_shooting}
          passing={players[8].rating_passing}
          dribbling={players[8].rating_dribbling}
          defense={players[8].rating_defense}
          physical={players[8].rating_physical}
        />
        <PlayerCard
          id={players[9].id}
          name={players[9].name}
          position={players[9].position}
          player_image={players[9].player_image}
          nation_image={players[9].nation_image}
          club_image={players[9].club_image}
          overall={players[9].rating_overall}
          pace={players[9].rating_pace}
          shooting={players[9].rating_shooting}
          passing={players[9].rating_passing}
          dribbling={players[9].rating_dribbling}
          defense={players[9].rating_defense}
          physical={players[9].rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={players[10].id}
          name={players[10].name}
          position={players[10].position}
          player_image={players[10].player_image}
          nation_image={players[10].nation_image}
          club_image={players[10].club_image}
          overall={players[10].rating_overall}
          pace={players[10].rating_pace}
          shooting={players[10].rating_shooting}
          passing={players[10].rating_passing}
          dribbling={players[10].rating_dribbling}
          defense={players[10].rating_defense}
          physical={players[10].rating_physical}
        />
      </div>


    </div>
  )
}

export default MyTeamContent;
