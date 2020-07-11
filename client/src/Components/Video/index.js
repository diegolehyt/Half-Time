import React from "react";
import "./style.css";

const styles = {
  viddeo: {
    position: 'fixed',
    minHeight: '100%',
    minWidth: '100%'
  }
}

function Video() {
  return (
    <video className="video-intro" style={styles.viddeo} poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
      autoPlay muted loop>
        <source src="images/bc2b.mp4" type="video/mp4"/>
      {/* <source src="https://d2ezlykacdqcnj.cloudfront.net/beach-soccer/beach-soccer.mp4" type="video/mp4"/> */}
      {/* https://cdn.videvo.net/videvo_files/video/free/2012-08/small_watermarked/hd0029_preview.webm */}
      {/* https://cdn.videvo.net/videvo_files/video/free/2019-04/small_watermarked/190312_28_StadioOlimpicoAndFans_Drone_003_preview.webm */}
    </video>
  )
    
  

}

export default Video;
