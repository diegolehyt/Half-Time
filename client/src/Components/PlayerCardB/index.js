
import React, {useState} from "react";
// import * as API from '../../utils/API'

const styles = {
  bcIMG: {
    backgroundImage: 'url(card5.png)'
  }
}

function PlayerCardB(props) {


  const [bool, setBool] = useState(false)

    const playerSelected = () => {
      props.onSelect(props)
      // console.log(props) -------------------- important check
      if (bool) {
        setBool(false)
      }
      else {
        setBool(true)
      }
      
      // props.classB = "yes"
    }

    // const playerDeleted = () => {
    //   props.onDelete(props)
    // }

    // // ADD
    // const handlePlayerSave = props => {
    //   // const book = books.find(book => book.id === id)
  
    //   // Use the method savePlayer() from the API module
    //   API.savePlayer({
    //     id: props.id,
    //     name: props.name,
    //     position: props.position,
    //     player_image: props.player_image,
    //     nation_image: props.nation_image,
    //     club_image: props.club_image,
    //     overall: props.rating_overall,
    //     pace: props.rating_pace,
    //     shooting: props.rating_shooting,
    //     passing: props.rating_passing,
    //     dribbling: props.rating_dribbling,
    //     defense: props.rating_defense,
    //     physical: props.rating_physical
    //   }) // .then(() => getPlayers())
    // }

    //     // DELETE 
    //     const handlePlayerDelete = props => {
    //       // const book = books.find(book => book.id === id)
      
    //       // Use the method savePlayer() from the API module
    //       API.deletePlayer({
    //         id: props.id,
    //         name: props.name,
    //         position: props.position,
    //         player_image: props.player_image,
    //         nation_image: props.nation_image,
    //         club_image: props.club_image,
    //         overall: props.rating_overall,
    //         pace: props.rating_pace,
    //         shooting: props.rating_shooting,
    //         passing: props.rating_passing,
    //         dribbling: props.rating_dribbling,
    //         defense: props.rating_defense,
    //         physical: props.rating_physical,
    //       }) // .then(() => getPlayers())
    //     }

    // ------------------------------------  change fut-player-card class onClick to add and delete 

    return (
        <div onClick={playerSelected} className="fut-player-card"  style={bool ? styles.bcIMG  : null}> 
        
          <div className="player-card-top">
            <div className="player-master-info">
            <div className="player-rating"><span>{props.rating_overall}</span></div>
            <div className="player-position"><span>{props.position}</span></div>
              <div className="player-nation"><img src={props.nation_image}/></div>
              <div className="player-club"><img src={props.club_image}/></div>
            </div>
            <div className="player-picture"><img src={props.player_image}/>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
            <div className="player-name"><span>{props.name}</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">{props.rating_pace}</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">{props.rating_shooting}</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">{props.rating_passing}</div>
                    <div className="player-feature-title">PAS</div></span></div>
                    <div className="player-features-col"><span>
                    <div className="player-feature-value">{props.rating_dribbling}</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">{props.rating_defense}</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">{props.rating_physical}</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PlayerCardB;