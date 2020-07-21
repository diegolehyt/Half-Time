import React from "react";
import "./style.css";
// import ResultBlock from "../components/ResultBlock";

const styles = {
  headerB: {
    color: "#04375a"
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a'
  },
  headerD: {
    textAlign: "center",
    marginTop: '77px',
    marginBottom: '40px'
  },
  headerE: {
    marginTop: '77px'
  }
}

function StreamsContent() {
  return (

    <div>
      <div className="container">
        {/* Jumbotron */}
        <div className="jumbotron p-0">
          {/* Card image */}
          <div className="view overlay rounded-top">
            <img src="https://s3.amazonaws.com/tinycards/image/4d663642841241380a6e54a31deae60a" className="img-fluid" alt="Sample image" />
            <a href="#">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/* Card content */}
          <div className="card-body text-center mb-3">
            {/* Title */}
            <h3 className="card-title h3 my-4"><strong>Streaming</strong></h3>
            {/* Text */}
            <p className="card-text py-2">Looking for a streaming service check out these great places to get all of your soccer needs in Canada</p>
            {/* Button */}
            <a href="https://www.livesoccertv.com/" className="btn purple-gradient btn-rounded mb-4 wave-effect">Watch Now</a>
            <a href="https://www.livesoccertv.com/" className="btn purple-gradient btn-rounded mb-4 wave-effect">Visit the Webpage</a>
          </div>
        </div>
        {/* Jumbotron */}
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          {/* Card */}
          <div className="card">
            {/* Card image */}
            <div className="view overlay">
              <img className="card-img-top image" src="https://s3.amazonaws.com/gt7sp-prod/decal/00/08/31/5836673917528310800_1.png" alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">DAZN Live</h4>

              {/* Button */}
              <a href="https://www.dazn.com/en-CA/welcome" className="btn btn-primary wave-effect">Watch Now</a>
              <a href="https://www.dazn.com/en-CA/welcome" className="btn btn-primary wave-effect">Visit the Webpage</a>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card">
            {/* Card image */}
            <div className="view overlay">
              <img className="card-img-top image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFSOi1RbSjJESIQwnOV3AVzLv1cP62pHuyMw&usqp=CAU" alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">TSN Streaming</h4>

              {/* Button */}
              <a href="https://www.tsn.ca/live" className="btn btn-primary wave-effect">Watch Now</a>
              <a href="https://www.tsn.ca/soccer" className="btn btn-primary wave-effect">Visit the Webpage</a>
            </div>
            {/* Card */}
          </div>
          {/* Card */}
          <div className="card">
            {/* Card image */}
            <div className="view overlay">
              <img className="card-img-top image" src="https://lh3.googleusercontent.com/HzMRkEB8dprZfgMQttAhjZ6S_DQP6pRtvYzQTNJYh9R5kRyqJ2o1eID0nHnllW6TqgU" alt="Card image cap" />
              <a href="#!">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">Sportsnet Live</h4>

              {/* Button */}
              <a href="https://now.sportsnet.ca/" className="btn btn-primary wave-effect">Watch Now</a>
              <a href="https://www.sportsnet.ca/soccer/" className="btn btn-primary wave-effect">Visit the Webpage</a>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card">
            {/* Card image */}
            <div className="view overlay">
              <img className="card-img-top image" src="https://www.thewrap.com/wp-content/uploads/2015/06/NBC-Sports-logo.jpg" alt="NBC Sports Logo" />
              <a href="#">
                <div className="mask rgba-white-slight" />
              </a>
            </div>
            {/* Card content */}
            <div className="card-body">
              {/* Title */}
              <h4 className="card-title">NBC Sports Live</h4>

              {/* Button */}
              <a href="https://www.nbcsports.com/live" className="btn btn-primary wave-effect">Watch Now</a>
              <a href="https://www.nbcsports.com/soccer" className="btn btn-primary wave-effect">Visit the Webpage</a>
            </div>
          </div>
        </div>
        {/* Card */}
      </div>
    </div>


  )
}

export default StreamsContent;
