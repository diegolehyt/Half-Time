import React from "react";
import "./style.css";

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
        <div className="fut-player-card" style={styles.headerB}>
        
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>MESSI</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>



        <div className="fut-player-card">
        
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/38.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/45.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/20801.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>RONALDO</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/54.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/73.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/190871.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>NEYMAR</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">

        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/55.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/181872.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>VIDAL</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="fut-player-card">
        
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/37.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/21.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/188545.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>LEWANDOWSKI</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="fut-player-card">
        
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/18.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/73.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/231747.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>MBAPPE</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="fut-player-card">
        
          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/50.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/173731.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>BALE</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row d-flex justify-content-center">

        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/45.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/155862.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>RAMOS</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/38.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/327.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/120533.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>PEPE</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/45.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/152729.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>PIQUE</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="fut-player-card">

          <div className="player-card-top">
            <div className="player-master-info">
              <div className="player-rating"><span>97</span></div>
              <div className="player-position"><span>RW</span></div>
              <div className="player-nation"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/55.png" alt="Argentina" draggable="false"/></div>
              <div className="player-club"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/10.png" alt="Barcelona" draggable="false"/></div>
            </div>
            <div className="player-picture"><img src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/174543.png" alt="Messi" draggable="false"/>
              <div className="player-extra"><span>4*SM</span><span>4*WF</span></div>
            </div>
          </div>
          <div className="player-card-bottom">
            <div className="player-info">
              <div className="player-name"><span>BRAVO</span></div>
              <div className="player-features">
                <div className="player-features-col"><span>
                    <div className="player-feature-value">97</div>
                    <div className="player-feature-title">PAC</div></span><span>
                    <div className="player-feature-value">95</div>
                    <div className="player-feature-title">SHO</div></span><span>
                    <div className="player-feature-value">94</div>
                    <div className="player-feature-title">PAS</div></span></div>
                <div className="player-features-col"><span>
                    <div className="player-feature-value">99</div>
                    <div className="player-feature-title">DRI</div></span><span>
                    <div className="player-feature-value">35</div>
                    <div className="player-feature-title">DEF</div></span><span>
                    <div className="player-feature-value">68</div>
                    <div className="player-feature-title">PHY</div></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default MyTeamContent;
