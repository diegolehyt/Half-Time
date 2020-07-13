import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import MyTeam from "./Pages/MyTeam";
import SelectPlayers from "./Pages/SelectPlayers";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from "./Components/Wrapper";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  }
}

function App() {
  return (
    <Router>
      <header style={styles.headerB}>
        <Navbar />
        <Wrapper basename="/">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/myteam" component={MyTeam} />
          <Route path="/selectplayers" component={SelectPlayers} />
        </Wrapper>
      </header>
    </Router>
  );
}

export default App;
