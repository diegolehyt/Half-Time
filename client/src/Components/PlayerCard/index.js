import React from "react";

const styles = {
  bcIMG: {
    backgroundImage: 'url(images/card13.png)'
  },
  overA: {
    fontWeight: "bolder"
  }
}


function PlayerCard(props) {
    return (
        <div className="fut-player-card" style={styles.bcIMG}>
        
          <div className="player-card-top">
            <div className="player-master-info">
            <div className="player-rating"><span style={styles.overA}>{props.overall}</span></div>
            <div className="player-position"><span style={styles.overA}>{props.position}</span></div>
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
                    <div className="player-feature-value">{props.pace}</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">{props.shooting}</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">{props.passing}</div>
                    <div className="player-feature-title">PAS</div></span></div>
                    <div className="player-features-col"><span>
                    <div className="player-feature-value">{props.dribbling}</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">{props.defense}</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">{props.physical}</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PlayerCard;