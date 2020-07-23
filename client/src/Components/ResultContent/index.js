import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthService from "../../Controllers/userController";
import "./style.css";
import Table from "react-tablegen";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import logos from "./logos.json";
// import ResultBlock from "../components/ResultBlock";

const styles = {
  headerB: {
    color: "#04375a",
  },
  bcLiga: {
    width: "75px",
    height: "75px",
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: "#04375a",
  },
  headerD: {
    fontFamily: "'Saira Semi Condensed', sans-serif",
    textAlign: "center",
    marginTop: "77px",
    marginBottom: "40px",
  },
  headerE: {
    marginTop: "77px",
  },
};

function ResultContent() {
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();
  const [bool, setBool] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(function(){
        AuthService.register(user).then((data) => {
          const { message } = data;
        });
        
      }, 2000)
    }


  }, [isAuthenticated]);

  function handleUser() {
    console.log("user: ", user.nickname);
    console.log("auth: ", isAuthenticated);
    setBool(true);
  }

  // -------------------john-----------------
  const [scoresEPL, setScoresEPL] = useState([]);
  const [tableEPL, setTableEPL] = useState([]);
  // const [newTableEPL, setNewTableEPL] = useState([])
  const [nextMatchEPL, setNextMatchEPL] = useState([]);

  const [scoresLiga, setScoresLiga] = useState([]);
  const [tableLiga, setTableLiga] = useState([]);
  const [nextMatchLiga, setNextMatchLiga] = useState([]);

  const [scoresBun, setScoresBun] = useState([]);
  const [tableBun, setTableBun] = useState([]);
  const [nextMatchBun, setNextMatchBun] = useState([]);

  const [scoresA, setScoresA] = useState([]);
  const [tableA, setTableA] = useState([]);
  const [nextMatchA, setNextMatchA] = useState([]);

  const [scoresLig1, setScoresLig1] = useState([]);
  const [tableLig1, setTableLig1] = useState([]);
  const [nextMatchLig1, setNextMatchLig1] = useState([]);


  //function that
  const getRecentScoresEPL = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setScoresEPL(res.events);
      });
  };

  const getTableEPL = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2019-2020"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTableEPL(res.table);

      //   const newArray = []
      //   res.table.map(team => {

      //     let image = logos.find(logo => (logo.name === team.name))
      //     newArray.push(team)
      //     team.logos = image.logos
      //     console.log(image.logos)

      //     // team.logo = newObj
      //   })
      //   setNewTableEPL(newArray)
      //   console.log(newTableEPL)
      });
  };

  const getNextMatchEPL = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setNextMatchEPL(res.events[0]);
      });
  };

  const getRecentScoresLiga = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4335"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setScoresLiga(res.events);
      });
  };

  const getTableLiga = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4335&s=2019-2020"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTableLiga(res.table);

        // const newArray = []
        // res.table.map(team => {

        //   let image = logos.find(logo => (logo.name === team.name))
        //   newArray.push(team)
        //   team.logos = image.logos
        //   console.log(image.logos)

        //   // team.logo = newObj
        // })
        // setNewTableEPL(newArray)
        // console.log(newTableEPL)
      });
  };

  const getNextMatchLiga = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4335"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        // setNextMatchLiga(res.events[0]);
      });
  };

  const getRecentScoresBun = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4331"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setScoresBun(res.events);
      });
  };

  const getTableBun = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=2019-2020"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTableBun(res.table);

        // const newArray = []
        // res.table.map(team => {

        //   let image = logos.find(logo => (logo.name === team.name))
        //   newArray.push(team)
        //   team.logos = image.logos
        //   console.log(image.logos)

        //   // team.logo = newObj
        // })
        // setNewTableEPL(newArray)
        // console.log(newTableEPL)
      });
  };

  const getNextMatchBun = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4331"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        // setNextMatchBun(res.events[0]);
      });
  };

  const getRecentScoresA = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4332"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setScoresA(res.events);
      });
  };

  const getTableA = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4332&s=2019-2020"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTableA(res.table);

        // const newArray = []
        // res.table.map(team => {

        //   let image = logos.find(logo => (logo.name === team.name))
        //   newArray.push(team)
        //   team.logos = image.logos
        //   console.log(image.logos)

        //   // team.logo = newObj
        // })
        // setNewTableEPL(newArray)
        // console.log(newTableEPL)
      });
  };

  const getNextMatchA = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4332"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setNextMatchA(res.events[0]);
      });
  };

  const getRecentScoresLig1 = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4334"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setScoresLig1(res.events);
      });
  };

  const getTableLig1 = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4334&s=2019-2020"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setTableLig1(res.table);

        // const newArray = []
        // res.table.map(team => {

        //   let image = logos.find(logo => (logo.name === team.name))
        //   newArray.push(team)
        //   team.logos = image.logos
        //   console.log(image.logos)

        //   // team.logo = newObj
        // })
        // setNewTableEPL(newArray)
        // console.log(newTableEPL)
      });
  };

  const getNextMatchLig1 = () => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4334"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        // setNextMatchLig1(res.events[0]);
      });
  };

  useEffect(() => {
    getRecentScoresEPL();
    getTableEPL();
    getNextMatchEPL();

    getRecentScoresLiga();
    getTableLiga();
    getNextMatchLiga();

    getRecentScoresBun();
    getTableBun();
    getNextMatchBun();

    getRecentScoresA();
    getTableA();
    getNextMatchA();

    getRecentScoresLig1();
    getTableLig1();
    getNextMatchLig1();
  }, []);

  return (
    <div className=" animated fadeInRight container" style={styles.headerD}>

          <Tabs>
            <TabList>
              <Tab><img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/13.png"/></Tab>
              <Tab><img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/53.png"/></Tab>
              <Tab><img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/19.png"/></Tab>
              <Tab><img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/31.png"/></Tab>
              <Tab><img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/16.png"/></Tab>
            </TabList>

            <TabPanel>
            <div className="row">
        <div className="col-5">

          <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Recent Results</h2>
            </div>

            <div className="card-body card-body-cascade text-center">
              <div className="card-text row">
                <div className="col-12">
                  <Table
                    data={scoresEPL}
                    columnHeaders={["Home", "", "", "Away"]}
                    columnKeys={[
                      "strHomeTeam",
                      "intHomeScore",
                      "intAwayScore",
                      "strAwayTeam",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Table</h2>
            </div>

            <div className="card-body card-body-cascade text-center row">
              <div className="col-12">
                <Table
                  data={tableEPL}
                  columnHeaders={[
                    // "img",
                    "Team",
                    "Played",
                    "Win",
                    "Draw",
                    "Loss",
                    "Points",
                  ]}
                  columnKeys={[
                    // "logos",
                    "name",
                    "played",
                    "win",
                    "draw",
                    "loss",
                    "total",
                  ]}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
            </TabPanel>
            <TabPanel>
            <div className="row">
        <div className="col-5">

          <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Recent Results</h2>
            </div>

            <div className="card-body card-body-cascade text-center">
              <div className="card-text row">
                <div className="col-12">
                  <Table
                    data={scoresLiga}
                    columnHeaders={["Home", "", "", "Away"]}
                    columnKeys={[
                      "strHomeTeam",
                      "intHomeScore",
                      "intAwayScore",
                      "strAwayTeam",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Table</h2>
            </div>

            <div className="card-body card-body-cascade text-center row">
              <div className="col-12">
                <Table
                  data={tableLiga}
                  columnHeaders={[
                    // "img",
                    "Team",
                    "Played",
                    "Win",
                    "Draw",
                    "Loss",
                    "Points",
                  ]}
                  columnKeys={[
                    // "logos",
                    "name",
                    "played",
                    "win",
                    "draw",
                    "loss",
                    "total",
                  ]}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
            </TabPanel>
            <TabPanel>
            <div className="row">
        <div className="col-5">

        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Recent Results</h2>
            </div>

            <div className="card-body card-body-cascade text-center">
              <div className="card-text row">
                <div className="col-12">
                  <Table
                    data={scoresBun}
                    columnHeaders={["Home", "", "", "Away"]}
                    columnKeys={[
                      "strHomeTeam",
                      "intHomeScore",
                      "intAwayScore",
                      "strAwayTeam",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Table</h2>
            </div>

            <div className="card-body card-body-cascade text-center row">
              <div className="col-12">
                <Table
                  data={tableBun}
                  columnHeaders={[
                    // "img",
                    "Team",
                    "Played",
                    "Win",
                    "Draw",
                    "Loss",
                    "Points",
                  ]}
                  columnKeys={[
                    // "logos",
                    "name",
                    "played",
                    "win",
                    "draw",
                    "loss",
                    "total",
                  ]}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
            </TabPanel>
            <TabPanel>
            <div className="row">
        <div className="col-5">

        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Recent Results</h2>
            </div>

            <div className="card-body card-body-cascade text-center">
              <div className="card-text row">
                <div className="col-12">
                  <Table
                    data={scoresA}
                    columnHeaders={["Home", "", "", "Away"]}
                    columnKeys={[
                      "strHomeTeam",
                      "intHomeScore",
                      "intAwayScore",
                      "strAwayTeam",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Table</h2>
            </div>

            <div className="card-body card-body-cascade text-center row">
              <div className="col-12">
                <Table
                  data={tableA}
                  columnHeaders={[
                    // "img",
                    "Team",
                    "Played",
                    "Win",
                    "Draw",
                    "Loss",
                    "Points",
                  ]}
                  columnKeys={[
                    // "logos",
                    "name",
                    "played",
                    "win",
                    "draw",
                    "loss",
                    "total",
                  ]}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
            </TabPanel>
            <TabPanel>
            <div className="row">
        <div className="col-5">

        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Recent Results</h2>
            </div>

            <div className="card-body card-body-cascade text-center">
              <div className="card-text row">
                <div className="col-12">
                  <Table
                    data={scoresLig1}
                    columnHeaders={["Home", "", "", "Away"]}
                    columnKeys={[
                      "strHomeTeam",
                      "intHomeScore",
                      "intAwayScore",
                      "strAwayTeam",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
        <div className="card rgba-black-light text-white">
            <div className="view view-cascade gradient-card-header rgba-purple-light">
              <h2 className="card-header">Table</h2>
            </div>

            <div className="card-body card-body-cascade text-center row">
              <div className="col-12">
                <Table
                  data={tableLig1}
                  columnHeaders={[
                    // "img",
                    "Team",
                    "Played",
                    "Win",
                    "Draw",
                    "Loss",
                    "Points",
                  ]}
                  columnKeys={[
                    // "logos",
                    "name",
                    "played",
                    "win",
                    "draw",
                    "loss",
                    "total",
                  ]}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
            </TabPanel>
          </Tabs>

      
    </div>
  );
}

export default ResultContent;
