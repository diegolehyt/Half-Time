import React from "react";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import AboutContent from "../Components/AboutContent";
import ResultContent from "../Components/ResultContent";

function Home() {
  return (
    <Intro>
      <Video />
      <AboutContent />
      <Mask>
        <Container>
          <ResultContent />
        </Container>
      </Mask>
    </Intro>
  );
}

export default Home;
