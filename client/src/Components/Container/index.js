import React from "react";
import "./style.css";

function Container(props) {
  return (
    <div className="container px-md-3 px-sm-0 animated fadeInRight">
      <div className="row wow fadeIn" {...props}></div>
    </div>
  )

}

export default Container;
