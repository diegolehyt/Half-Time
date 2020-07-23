import "./style.css";
import React, { useState, useEffect } from "react";


const styles = {
    headerB: {
        color: "#04375a"
    },
    infoS: {
        fontSize: "50px",
        marginBottom: "20px"
    },
    headerC: {
        fontFamily: "'Trade Winds', cursive",
        color: '#04375a'
    },
    headerD: {
        textAlign: "center",
        marginTop: '100px',
        marginBottom: '40px',
        fontFamily: "'Saira Semi Condensed', sans-serif"
    },
    headerE: {
        marginTop: '77px'
    },
    img1: {
        height: "170px",
        width: "300px"
    },
    img2: {
        height: "",
        width: ""
    },
    secondRow: {
        marginTop: "30px"
    },
    back: {
        marginTop: "10px"
    }
}

function StreamsContent() {



    return (
        <>
          <div className=" animated fadeInRight container" style={styles.headerD}>

            <div className="row" style={styles.headerE}>
                <div className="col-md-12 col-sm-12">
                    <div className="card card-cascade rgba-black-light white-text">

                      <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                          <h2 className="card-header-title mb-3"> Looking for a Match?</h2>

                      </div>
                      
                      <div className="view overlay hm-blue-strong col-12">
                        <img className="img-fluid" src="https://s3.amazonaws.com/tinycards/image/4d663642841241380a6e54a31deae60a" alt="Avatar" />
                        <div className="mask page-footer rgba-black-strong d-flex align-items-left">
                          <div className="white-text" style={styles.infoS}>Find the Best Streams over here!</div>
                        </div>
                      </div>


                    </div>

                </div>

            </div>
            <div className="row" style={styles.secondRow}>
                <div className="col-12">
                    <div className="card card-cascade rgba-black-light white-text">

                        <div className="view view-cascade gradient-card-header  rgba-purple-light darken-3 text-white">

                            <h2 className="card-header-title mb-3">Flip to see the Streams</h2>

                        </div>
                        <div className="row">
                            <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img-fluid" src="https://www.vpnfan.com/wp-content/uploads/2018/08/dazn-logo.jpg" alt="Avatar" style={styles.img1} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p style={styles.back} className="amber-text">DAZN</p>
                                        <a target="_blank" rel='noopener noreferrer' href="https://www.dazn.com/en-CA/welcome" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Watch Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFSOi1RbSjJESIQwnOV3AVzLv1cP62pHuyMw&usqp=CAU" alt="Avatar" style={styles.img1} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p style={styles.back} className="amber-text">TSN</p>
                                        <a target="_blank" rel='noopener noreferrer' href="https://www.tsn.ca/live" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Watch Now</a>
                                        <a target="_blank" rel='noopener noreferrer' href="https://www.tsn.ca/soccer" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Visit the Webpage</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img-fluid" src="https://lh3.googleusercontent.com/HzMRkEB8dprZfgMQttAhjZ6S_DQP6pRtvYzQTNJYh9R5kRyqJ2o1eID0nHnllW6TqgU" alt="Avatar" style={styles.img1} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p style={styles.back} className="amber-text">Sportsnet</p>
                                        <a target="_blank" rel='noopener noreferrer' href="https://now.sportsnet.ca/" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Watch Now</a>
                                        <a target="_blank" rel='noopener noreferrer' href="https://www.sportsnet.ca/soccer/" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Visit the Webpage</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flip-card col-sm-12 col-md-6 col-lg-3">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img className="img-fluid" src="data:image/png;base64,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" alt="Avatar" style={styles.img1} />
                                    </div>
                                    <div className="flip-card-back">
                                        <p style={styles.back} className="amber-text">Bein</p>
                                        <a target="_blank" rel='noopener noreferrer' href="https://connect.beinsports.com/ca/" className="btn btn-sm btn-fb special-color-dark wave-effect" ><i className="fas fa-window-maximize pr-1"></i>Watch Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default StreamsContent;