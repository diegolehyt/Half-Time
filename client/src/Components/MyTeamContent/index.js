import React from "react";
import "./style.css";
import players from "./players.json"
import PlayerCard from "../PlayerCard/index"

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

function MyTeamContent() {
  return (
    
    <div  style={styles.headerD} className="col-12 bcImg img-fluid">


      <div className="row d-flex justify-content-center">
        <PlayerCard
          id={players[0].id}
          name={players[0].name}
          position={players[0].position}
          player_image={players[0].player_image}
          nation_image={players[0].nation_image}
          club_image={players[0].club_image}
          overall={players[0].rating_overall}
          pace={players[0].rating_pace}
          shooting={players[0].rating_shooting}
          passing={players[0].rating_passing}
          dribbling={players[0].rating_dribbling}
          defense={players[0].rating_defense}
          physical={players[0].rating_physical}
        /> 
        <PlayerCard
          id={players[1].id}
          name={players[1].name}
          position={players[1].position}
          player_image={players[1].player_image}
          nation_image={players[1].nation_image}
          club_image={players[1].club_image}
          overall={players[1].rating_overall}
          pace={players[1].rating_pace}
          shooting={players[1].rating_shooting}
          passing={players[1].rating_passing}
          dribbling={players[1].rating_dribbling}
          defense={players[1].rating_defense}
          physical={players[1].rating_physical}
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
