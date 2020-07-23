import React from "react";
import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import StreamsContent from "../Components/StreamsContent";

const Streams = () => {

  return (
    <Intro>
      <Video/>
      <Mask>
      
        <Container>
          <StreamsContent/>
        </Container>
      </Mask>
    </Intro>
  );
};

export default Streams;
