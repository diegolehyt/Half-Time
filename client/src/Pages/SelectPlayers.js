import React from "react";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import SelectPlayerContent from "../Components/SelectPlayerContent";
// import ResultContent from "../Components/ResultContent";

function SelectPlayers() {
  return (
    <Intro>
      <Video/>
      <Mask>
        <Container>
          <SelectPlayerContent/>
        </Container>
      </Mask>
    </Intro>
  );
}

export default SelectPlayers;