import React from "react";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
// import AboutContent from "../Components/AboutContent";
import GameContent from "../Components/GameContent";

function Game() {
  return (
    <Intro>
      <Video/>
      {/* <AboutContent/> */}
      <Mask>
        <Container>
          <GameContent/>
        </Container>
      </Mask>
    </Intro>
  );
}

export default Game;
