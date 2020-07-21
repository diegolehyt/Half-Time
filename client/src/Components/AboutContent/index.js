import React, { useEffect, useState }from "react";
import "./style.css";

const styles = {
  headerB: {
    color: "#04375a" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a' 
  },
  headerD: {
    fontFamily: "'Saira Semi Condensed', sans-serif",
    textAlign: "center",
    marginTop: '77px',
    marginBottom: '40px'
  },
  headerE: {
    width: "300px",
    height: '300px'
  }
}

function AboutContent() {

  const [news1, setNews1] = useState([])
  const [news2, setNews2] = useState([])
  const [news3, setNews3] = useState([])

  const getNews1 = () => {
    fetch("https://content.guardianapis.com/search?&section=football&order-by=newest&api-key=02647ab4-12ee-435f-a52a-a42cf3f05dc4")
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        setNews1(res.response.results[0])
      });
  }  

  const getNews2 = () => {
    fetch("https://content.guardianapis.com/search?&section=football&order-by=newest&api-key=02647ab4-12ee-435f-a52a-a42cf3f05dc4")
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        setNews2(res.response.results[1])
      });
  } 

  const getNews3 = () => {
    fetch("https://content.guardianapis.com/search?&section=football&order-by=newest&api-key=02647ab4-12ee-435f-a52a-a42cf3f05dc4")
      .then(function(response) {
        return response.json();
      })
      .then(function(res) {
        setNews3(res.response.results[2])
      });
  } 

  useEffect (()=>{
    getNews1()
    getNews2(
    getNews3()
    )
  },[])

  return (
    
    <div id="carousel-example-2" className="carousel slide carousel-fade animated fadeInRight" style={styles.headerD} data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-2" data-slide-to="1"></li>
        <li data-target="#carousel-example-2" data-slide-to="2"></li>
      </ol>

   
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <img className="d-block w-100" src="images/slide1.jpg" alt="First slide"/>
            <div className="mask rgba-black-strong"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">{news1.webTitle}</h3>
            <a href={news1.webUrl}>View Now</a>
          </div>
        </div>
        <div className="carousel-item">

          <div className="view">
            <img className="d-block w-100" src="images/slide3.jpg" alt="Second slide"/>
            <div className="mask rgba-black-strong"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">{news2.webTitle}</h3>
            <a href={news2.webUrl}>View Now</a>
          </div>
        </div>
        <div className="carousel-item">
      
          <div className="view">
            <img className="d-block w-100" src="images/slide2.jpg" alt="Third slide"/>
            <div className="mask rgba-black-strong"></div>
          </div>
          <div className="carousel-caption">
            <h3 className="h3-responsive">{news3.webTitle}</h3>
            <a href={news3.webUrl}>View Now</a>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )

}

export default AboutContent;
