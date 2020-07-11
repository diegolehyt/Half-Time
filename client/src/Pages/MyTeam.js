import React from "react";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import MyTeamContent from "../Components/MyTeamContent";
// import ResultContent from "../Components/ResultContent";

function MyTeam() {
  return (
    <Intro>
      <Video/>
      <Mask>
        <Container>
          <MyTeamContent/>
        </Container>
      </Mask>
    </Intro>
  );
}

export default MyTeam;