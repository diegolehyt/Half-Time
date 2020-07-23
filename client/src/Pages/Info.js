import React, { useState, useContext } from "react";
import Message from "../Components/Message";
import { AuthContext } from "../Context/AuthContext";

import Intro from "../Components/Intro";
import Video from "../Components/Video";
import Mask from "../Components/Mask";
import Container from "../Components/Container";
import InfoContent from "../Components/InfoContent";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive"
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  vidddeo: {
    position: 'fixed',
    maxHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '10%',
    height: '100%'
  },
  sic: {
    maxHeight: '100%'
  },
  sac: {
    marginTop: '10%'
  }
}

function Info() {
  return (
    <Intro>
      <Video/>
      <Mask>
      
        <Container>
          <InfoContent/>
        </Container>
      </Mask>
    </Intro>
  );
};

export default Info;
