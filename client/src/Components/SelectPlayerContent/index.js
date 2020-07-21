import React, { useState, useEffect } from "react";
import "./style.css";
import logos from "./logos.json"
import logosB from "./logosB.json"
import logosC from "./logosC.json"
import logosD from "./logosD.json"
import logosE from "./logosE.json"
// import API2, * as API from '../../utils/API2'
import PlayerCardB from "../PlayerCardB/index";
import AuthService from "../../Services/AuthService";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownItem from "../DropDownItem";

const styles = {
  buttonS: {
    // marginLeft: '20px',
    // marginTop: '0px',
    fontWeight: "bold",
  },
  headerB: {
    color: "gold",
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: "#04375a",
  },
  headerD: {
    fontFamily: "'Saira Semi Condensed', sans-serif",
    textAlign: "center",
    marginTop: "77px",
    marginBottom: "70px",
    height: "400vh",
    width: "100vh",
  },
  headerE: {
    width: "200px",
    height: "200px",
  },
  bcLiga: {
    width: "100px",
    height: "100px",
  },
  headerF: {
    marginTop: "100px"
  }
  
};

function SelectPlayerContent() {
  const [selectedPlayers, setSelectedPlayer] = useState([]);

  const [apiPlayers, setApiPlayers] = useState([]);

  const [playerF, setPlayerF] = useState("");

  const [teamLogo, setTeamLogo] = useState();
  const [teamName, setTeamName] = useState();

  const [objId, setObjId] = useState("");

  const [boo, setBoo] = useState(false);
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();

  const [search, setSearch] = useState("");
  const [results, setResult] = useState([]);
  const [apiLogos, setLogos] = useState([]);
  const [selectedLogo, setSelectedLogo] = useState([]);

  const getLogos = () => {
    // fetch("/api/logos")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (res) {
    //     setLogos(res);
    //     console.log(res);
    //   });
    setLogos(logos)
  };
  useEffect(() => {
    getLogos();
  }, []);

  const updateSearch = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };

  useEffect(() => {
    setResult(
      apiPlayers.filter((player) => {
        return player.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, apiPlayers]);

  // const team = []
  const onPlayerSelect = (player) => {
    setPlayerF(player);
    //if useState does not contain 'player', run code below
    //compare id of 'player' that you're trying to push with every id of 'player' in the state. If no id matches then run
    //run code below

    const jugador = selectedPlayers.find((playerX) => playerX.id === player.id);

    if (jugador !== undefined) {
      const newSelectedPlayers = selectedPlayers.filter(
        (playerZ) => playerZ.id !== player.id
      );
      // console.log("new Array!!----------------------------");
      //  console.log(newSelectedPlayers)
      setSelectedPlayer(newSelectedPlayers);
      setBoo(false);
    } else {
      setSelectedPlayer(selectedPlayers.concat(player));
      // console.log(selectedPlayers);
      setBoo(true);
    }

    // setSelectedPlayer(selectedPlayers.concat(player))
    //if useState DOES contain 'player', delete object from useState
    //compare id of 'player' that you're trying to push with every 'player' in the state array by mapping through the array.
  };
  //save team button code:
  // onclick that calls a function that makes an API call sending whats in the state to the backend.

  // API call : delete what was there before, create new team
  // const callApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilenty();

  //     const response = await fetch(`${apiOrigin}/api/users/user:id`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ myteam: selectedPlayers }),
  //     });
  //   }
  // };

  //

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(function () {
        fetch("/api/users/")
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            // setApiPlayers(res);

            const onlineUser = res.find((playerX) => playerX.sub === user.sub);
            // console.log(onlineUser._id);
            setObjId(onlineUser._id);
          });
      }, 2000);
    }
  }, [isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    // AuthService.saveteam(selectedPlayers).then((data) => {
    //   const { message } = data;
    // });

    user.myteam = selectedPlayers;
    console.log("***************USER****************", user.myteam);
    console.log("***************ID****************", objId);

    const newTeam = { // ADD teamName: teamName and teamLogo: teamLogo
      myteam: user.myteam
      // name: "DIEGO"
    };
    // eslint-disable-next-line no-undef
    fetch(`/api/users/${objId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeam),
    }).then((response) => {
      console.log(response);
    });

    // AuthService.register2(user).then((data) => {
    //   const { message } = data;
    // });
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // AuthService.saveteam(selectedPlayers).then((data) => {
  //   //   const { message } = data;
  //   // });

  const getAllPlayers = () => {
    fetch("/api/players")
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setApiPlayers(res);
        console.log(res);
      });
    // API.getAllPlayers()
    //   .then(res => setApiPlayers(res))
    //   .catch(() => {
    //     setApiPlayers([])
    //   })
    //   console.log(res)
  };
  useEffect(() => {
    getAllPlayers();
  }, []);


  const addLogo = (logoData) => {
    console.log(logoData);
    setTeamLogo(logoData.logos)
    setTeamName(logoData.name)
  };

  const onPlayerDelete = (player) => {
    // add player to database
    console.log(player);
  };

  const addPlayers = () => {
    return (
      <>
        <div style={styles.headerB}>
          <strong>My Fantasy: {selectedPlayers.length} / 11 </strong>
        </div>

        <div className="row d-flex justify-content-center">
          {apiPlayers.map((player) => (
            <PlayerCardB
              key={player.name}
              onSelect={onPlayerSelect}
              onDelete={onPlayerDelete}
              boo={boo}
              {...player}
            />
          ))}
        </div>
      </>
    );
  };

  const completePlayers = () => {
    return (
      <>
        <div style={styles.headerB}>
          <strong>
            Max Amount of Players reached! {selectedPlayers.length} / MAX!{" "}
          </strong>
          <button
            type="submit"
            className="btn btn-outline-warning yellow"
            onClick={onSubmit}
            style={styles.buttonS}
          >
            Submit Team
          </button>
        </div>
        <div className="row d-flex justify-content-center">
          {selectedPlayers.map((player) => (
            <PlayerCardB
              key={player.name}
              onSelect={onPlayerSelect}
              onDelete={onPlayerDelete}
              boo={boo}
              {...player}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div style={styles.headerD} className="col-12 bcImg2 img-fluid">
      {/* <div>
        {selectedPlayers.map(player => (
          <p>{player.name}</p>
        ))}
      </div> */}
      <div className="row" >
        <div className="col-2">
          <button
            class="btn transparent text-white dropdown-toggle mr-4"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            
          >
            <img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/13.png"/>
          </button>

          <div class="dropdown-menu"  style={styles.headerF}>
            {apiLogos.map((logo) => (
              <DropDownItem onAdd={addLogo} {...logo} />
            ))}
          </div>
        </div>

        <div className="col-2">
          <button
            class="btn transparent text-white dropdown-toggle mr-4"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/31.png"/>
          </button>

          <div class="dropdown-menu" style={styles.headerF}>
            {logosB.map((logo) => (
              <DropDownItem onAdd={addLogo} {...logo} />
            ))}
          </div>
        </div>

        <div className="col-2">
          <button
            class="btn transparent text-white dropdown-toggle mr-4"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/19.png"/>
          </button>

          <div class="dropdown-menu" style={styles.headerF}>
            {logosC.map((logo) => (
              <DropDownItem onAdd={addLogo} {...logo} />
            ))}
          </div>
        </div>

        <div className="col-2">
          <button
            class="btn transparent text-white dropdown-toggle mr-4"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/53.png"/>
          </button>

          <div class="dropdown-menu" style={styles.headerF}>
            {logosE.map((logo) => (
              <DropDownItem onAdd={addLogo} {...logo} />
            ))}
          </div>
        </div>

        <div className="col-2">
          <button
            class="btn transparent text-white dropdown-toggle mr-4"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img style={styles.bcLiga} src="https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/16.png"/>
          </button>

          <div class="dropdown-menu" style={styles.headerF}>
            {logosD.map((logo) => (
              <DropDownItem onAdd={addLogo} {...logo} />
            ))}
          </div>
        </div>
        {
          teamLogo
          ?
          <div className="col-2 text-center">
            <img src={teamLogo} style={styles.headerE}/>
            <h3 className="white-text">{teamName}</h3>
          </div>
        :
        ""
        }
  
      </div>  
      {selectedPlayers.length < 11 ? addPlayers() : completePlayers()}
    </div>
  );
}

export default SelectPlayerContent;
