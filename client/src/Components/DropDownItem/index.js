import React from "react";
const styles = {
  headerE: {
    width: "20px",
    height: "20px",
  }
}

export default function DropDownItem(props) {
  //   console.log(props);
  const sLogo = () => {
    props.onAdd(props)
    
  };
  return (
    <a class="dropdown-item" onClick={sLogo}>
      <img src={props.logos} style={styles.headerE} />
      {props.name}
    </a>
  );
}
