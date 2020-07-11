import React from "react";
import "./style.css";

const styles = {
  view: {
    position: 'relative',
    overflow: 'hidden'
  }
}

function Intro(props) {
  return <div id="intro-section" style={styles.view} {...props}></div>

}

export default Intro;
