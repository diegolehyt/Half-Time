import React from "react";
const styles = {
  headerE: {
    width: "100px",
    height: "100px",
    marginRight: "5px",
    marginBottom: "8px"
  }
}

export default function LogoTeam(props) {
  //   console.log(props);
  const sLogo = () => {
    props.onAdd(props)
    
  };
  return (

    <img src={props.logo} onClick={sLogo} style={styles.headerE} />

  );
}
