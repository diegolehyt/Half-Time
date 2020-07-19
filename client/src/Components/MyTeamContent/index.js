import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./style.css";
// import players from "./players.json"
import PlayerCard from "../PlayerCard/index"

// import * as API from '../../utils/API'

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
  },
  buttonS: {
    // marginLeft: '20px',
    // marginTop: '0px',
    fontWeight: 'bold'
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

  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();
  const [objId, setObjId] = useState("");
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
  // useEffect(() => {
  //   // For demonstration purposes, we mock an API call.
  //   API.getDeveloper().then(res => {
  //     setPlayer1(res.myteam[0])
  //     setPlayer2(res.myteam[1])
  //     setPlayer3(res.myteam[2])
  //     setPlayer4(res.myteam[3])
  //     setPlayer5(res.myteam[4])
  //     setPlayer6(res.myteam[5])
  //     setPlayer7(res.myteam[6])
  //     setPlayer8(res.myteam[7])
  //     setPlayer9(res.myteam[8])
  //     setPlayer10(res.myteam[9])
  //     setPlayer11(res.myteam[10])
      
  //     setMyteam(res.myteam)

  //     console.log('Developer State:')
  //     // console.log(res.myteam)
  //     console.log(myTEAM)
  //   })
  // }, [])

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(function(){
        fetch("/api/users/")
        .then(function (response) {
          return response.json();
        })
        .then(function (res) {
          // setApiPlayers(res);
          
          const onlineUser = res.find((playerX) => playerX.sub === user.sub);
          // console.log(onlineUser._id);
          setObjId(onlineUser._id)
          
          fetch(`/api/users/${onlineUser._id}`)
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            console.log(res)
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
          });
        });
        
      }, 2000)
      
    }


  }, [isAuthenticated]);

  // const handleSubmit = function () {
  //   API.getDeveloper().then(res => {
  //     setMyteam(res)
  //     console.log('Developer State:')
  //     console.log(res.myteam)
  //   })

  // }

  return (
    
    <div  style={styles.headerD} className="col-12 bcImg img-fluid">


      {/* <li>{players[0].name} <button onClick={()=>setPlayer(players[0])} > add </button> </li> */}

      {/* <button onClick={()=>handleSubmit()}>
        API
      </button> */}

      {/* <p>{player1.name}</p>
      <p>{player2.name}</p> */}
      {/* <p>{myTeam[0].name}</p> */}
      {/* <p>{myTeam[2].name}</p> */}

      {/* {myTeam.map(playerT => (
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
      ))} */}



      <div className="row d-flex justify-content-center">

        <div className="col-12">
          <Link to="/game" className="btn btn-outline-warning yellow" style={styles.buttonS}>
            Play a Match{" "}
            <i className="fas fa-futbol light-green-text-2"></i>
          </Link>
        </div>


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
          id={player3.id}
          name={player3.name}
          position={player3.position}
          player_image={player3.player_image}
          nation_image={player3.nation_image}
          club_image={player3.club_image}
          overall={player3.rating_overall}
          pace={player3.rating_pace}
          shooting={player3.rating_shooting}
          passing={player3.rating_passing}
          dribbling={player3.rating_dribbling}
          defense={player3.rating_defense}
          physical={player3.rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={player4.id}
          name={player4.name}
          position={player4.position}
          player_image={player4.player_image}
          nation_image={player4.nation_image}
          club_image={player4.club_image}
          overall={player4.rating_overall}
          pace={player4.rating_pace}
          shooting={player4.rating_shooting}
          passing={player4.rating_passing}
          dribbling={player4.rating_dribbling}
          defense={player4.rating_defense}
          physical={player4.rating_physical}
        />
        <PlayerCard
          id={player5.id}
          name={player5.name}
          position={player5.position}
          player_image={player5.player_image}
          nation_image={player5.nation_image}
          club_image={player5.club_image}
          overall={player5.rating_overall}
          pace={player5.rating_pace}
          shooting={player5.rating_shooting}
          passing={player5.rating_passing}
          dribbling={player5.rating_dribbling}
          defense={player5.rating_defense}
          physical={player5.rating_physical}
        />
        <PlayerCard
        id={player6.id}
        name={player6.name}
        position={player6.position}
        player_image={player6.player_image}
        nation_image={player6.nation_image}
        club_image={player6.club_image}
        overall={player6.rating_overall}
        pace={player6.rating_pace}
        shooting={player6.rating_shooting}
        passing={player6.rating_passing}
        dribbling={player6.rating_dribbling}
        defense={player6.rating_defense}
        physical={player6.rating_physical}
        />
        <PlayerCard
        id={player7.id}
        name={player7.name}
        position={player7.position}
        player_image={player7.player_image}
        nation_image={player7.nation_image}
        club_image={player7.club_image}
        overall={player7.rating_overall}
        pace={player7.rating_pace}
        shooting={player7.rating_shooting}
        passing={player7.rating_passing}
        dribbling={player7.rating_dribbling}
        defense={player7.rating_defense}
        physical={player7.rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={player8.id}
          name={player8.name}
          position={player8.position}
          player_image={player8.player_image}
          nation_image={player8.nation_image}
          club_image={player8.club_image}
          overall={player8.rating_overall}
          pace={player8.rating_pace}
          shooting={player8.rating_shooting}
          passing={player8.rating_passing}
          dribbling={player8.rating_dribbling}
          defense={player8.rating_defense}
          physical={player8.rating_physical}
        />
        <PlayerCard
          id={player9.id}
          name={player9.name}
          position={player9.position}
          player_image={player9.player_image}
          nation_image={player9.nation_image}
          club_image={player9.club_image}
          overall={player9.rating_overall}
          pace={player9.rating_pace}
          shooting={player9.rating_shooting}
          passing={player9.rating_passing}
          dribbling={player9.rating_dribbling}
          defense={player9.rating_defense}
          physical={player9.rating_physical}
        />
        <PlayerCard
          id={player10.id}
          name={player10.name}
          position={player10.position}
          player_image={player10.player_image}
          nation_image={player10.nation_image}
          club_image={player10.club_image}
          overall={player10.rating_overall}
          pace={player10.rating_pace}
          shooting={player10.rating_shooting}
          passing={player10.rating_passing}
          dribbling={player10.rating_dribbling}
          defense={player10.rating_defense}
          physical={player10.rating_physical}
        />
      </div>


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={player11.id}
          name={player11.name}
          position={player11.position}
          player_image={player11.player_image}
          nation_image={player11.nation_image}
          club_image={player11.club_image}
          overall={player11.rating_overall}
          pace={player11.rating_pace}
          shooting={player11.rating_shooting}
          passing={player11.rating_passing}
          dribbling={player11.rating_dribbling}
          defense={player11.rating_defense}
          physical={player11.rating_physical}
        />
      </div>


    </div>
  )
}

export default MyTeamContent;
