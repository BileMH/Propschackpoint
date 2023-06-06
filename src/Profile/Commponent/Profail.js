import React from 'react'
import './Profails.css'
import PropTypes from "prop-types"

const Profail = (props) => {
 const bio =(contact) => alert (`the contact is ${props.fullnam}`)
  return (
    <div className='first'>
      
        <div>
          <div className="container mt-5"> 
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
              {props.children}
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">{props.fullnam}</span>
                <h5 className="mt-2 mb-0"></h5>
                <span>{props.profession}</span>
                <div className="px-4 mt-1">
                  <p className="fonts"> {props.bio} </p>
                </div>
                <ul className="social-list">
                  <li><i className="fa fa-facebook" /></li>
                  <li><i className="fa fa-dribbble" /></li>
                  <li><i className="fa fa-instagram" /></li>
                  <li><i className="fa fa-linkedin" /></li>
                  <li><i className="fa fa-google" /></li>
                </ul>
                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">Message</button>
                  <button className="btn btn-primary px-4 ms-3" onClick={bio}>  Contact</button>
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
Profail.propTypes ={
  fullnam : PropTypes.string ,
  profession : PropTypes.string ,
  bio : PropTypes.isRequired,
}

export default Profail