import React, { useState, useEffect } from "react";
import "./style.css";
// import players from "./players.json"
// import API2, * as API from '../../utils/API2'
import PlayerCardB from "../PlayerCardB/index";
import AuthService from "../../Services/AuthService";
import { useAuth0 } from "@auth0/auth0-react";

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
    width: "300px",
    height: "300px",
  },
};

function SelectPlayerContent() {
  const [selectedPlayers, setSelectedPlayer] = useState([]);

  const [apiPlayers, setApiPlayers] = useState([]);

  const [playerF, setPlayerF] = useState("");

  const [objId, setObjId] = useState("");

  const [boo, setBoo] = useState(false);
  const { isAuthenticated, user, setIsAuthenticated, setUser } = useAuth0();

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
        });
        
      }, 2000)
    }


  }, [isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    // AuthService.saveteam(selectedPlayers).then((data) => {
    //   const { message } = data;
    // });

    user.myteam = selectedPlayers;
    console.log('***************USER****************', user.myteam);
    console.log('***************ID****************', objId);

   
    const newTeam = {
      myteam: user.myteam
    }
    // eslint-disable-next-line no-undef
    fetch(`/api/users/${objId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeam)
    }).then(response => {
      // eslint-disable-next-line no-undef
      // if (response.ok) location.replace('/restaurants/reviews')
      console.log(response)
    })


    // AuthService.register2(user).then((data) => {
    //   const { message } = data;
    // });
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // AuthService.saveteam(selectedPlayers).then((data) => {
  //   //   const { message } = data;
  //   // });

  //   user.myteam = selectedPlayers;
  //   console.log(user);

  //   AuthService.register2(user).then((data) => {
  //     const { message } = data;
  //   });
  // };

  // const onPlayerSelect = (player) => {
  //   setPlayerF(player)
  //   // team.push(player)
  //   // setSelectedPlayer(team) // ([1, 2, 3])

  //   // add player to database
  //   // console.log(selectedPlayers)

  //   // console.log(player)
  //   // console.log(team)
  // }
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

  // function saveTeam () {

  //   return fetch('http://localhost:5000/api/myteam', {
  //     method : "post",
  //     body : JSON.stringify(selectedPlayers),
  //     headers: {'Content-Type' : 'application/json'}
  //   }).then(response => {
  //     if(response.status !== 401) {
  //       return response.json().then(data => data)
  //     }
  //   })

  // }

  // function saveTeam() {
  //   let url = "/api/myteam";
  //   let data = { name: "MESSI" };

  //   fetch(url, {
  //     method: "PUT", // or 'PUT'
  //     body: JSON.stringify(data), // data can be `string` or {object}!
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .catch((error) => console.error("Error:", error))
  //     .then((response) => console.log("Success:", response));
  // }

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

      {selectedPlayers.length < 11 ? addPlayers() : completePlayers()}
    </div>
  );
}

export default SelectPlayerContent;
