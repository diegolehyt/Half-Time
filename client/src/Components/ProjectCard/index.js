import React from "react";
import "./style.css";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  },
  htmlS: {
    fontSize:'36px', 
    color: 'rgb(141, 62, 62)',
    marginRight: '5px'
  },
  nodeS: {
    fontSize:'36px', 
    color: 'rgb(65, 109, 71)',
    marginRight: '5px'
  },
  jsS: {
    fontSize:'36px', 
    color: 'rgb(189, 176, 1)',
    marginRight: '5px'
  },
  cssS: {
    fontSize:'36px', 
    color: 'rgb(62, 87, 141)',
    marginRight: '5px'
  },
  bootS: {
    fontSize:'36px', 
    color: 'rgb(62, 63, 141)',
    marginRight: '5px'
  },
  dbS: {
    fontSize:'36px',
    marginRight: '5px'
  },
  uiS: {
    fontSize:'36px',
    marginRight: '5px',
    color:'lightblue'
  },
  gitS: {
    fontSize:'24px', 
    color: 'rgb(110, 94, 136)'
  },
  githS: {
    fontSize:'24px', 
    color: 'rgb(66, 66, 66)'
  },
  ytS: {
    fontSize:'24px', 
    color: 'lightcoral'
  },
  mhS: {
    maxHeight: '800px'
  },
  mWork: {
    color: '#52a4db'
  },
  H: {
    height: '100%'
  },
  W: {
    width: '100%'
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  sec: {
    width: '400px'
  }
}

function ProjectCard() {
  return (
    <div>
      <div className="modal fade col-12" id="revisa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered d-flex justify-content-center" role="document">
          <div className="modal-content" style={styles.sec}>
            <div className="modal-body p-0" style={styles.mhS}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              
              
              <div className="row">
              
          
                <div className="col-12">

                 
                  <div className="card">

                    <div className="card-body">

                      <form name="">
                        <h3 className="dark-grey-text text-center">
                          <strong>Register:</strong>
                        </h3>
                        <hr/>

                        <div className="md-form">
                          <i className="fas fa-user prefix grey-text"></i>
                          <input type="text" id="form3" className="form-control"/>
                          <label for="form3">Your name</label>
                        </div>
                        <div className="md-form">
                          <i className="fas fa-envelope prefix grey-text"></i>
                          <input type="text" id="form2" className="form-control"/>
                          <label for="form2">Your username</label>
                        </div>

                        <div className="md-form">
                          <i className="fas fa-pencil-alt prefix grey-text"></i>
                          <textarea type="text" id="form8" className="md-textarea"></textarea>
                          <label for="form8">Your password</label>
                        </div>

                        <div className="text-center">
                          <button className="btn btn-indigo">Submit</button>
                          <hr/>
                          <fieldset className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox1"/>
                            <label for="checkbox1" className="form-check-label dark-grey-text">Subscribe me to the Half-Time news</label>
                          </fieldset>
                        </div>

                      </form>

                    </div>

                  </div>

                </div>

              
              </div>
              
              
            </div>
          </div>
        </div>
      </div>


    </div>
    
    

  )

}

export default ProjectCard;
