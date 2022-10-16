import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {

  const [show, setShow] = useState(true)

  const controlNavbar = ()=>{
    if(window.pageYOffset>100){
      setShow(false);
    }
    else{
      setShow(true);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', controlNavbar)
    return()=>{
      window.removeEventListener('scroll', controlNavbar)
    }
  },[]);


  return (
    <>
      <nav className={`navbar ${show && `fixed-top`} navbar-expand-lg navbar-light p-md-3`}>
        <div className="container">
          <a href="https://www.google.com/" className="navbar-brand text-white navbarBrand">
            Tutor Master <br></br>{" "}
            <span className="brandSubHeading">Knowledge Transfer</span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="https://www.google.com/" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com/" className="nav-link text-white">
                  Trainings
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.com/" className="nav-link text-white">
                  About
                </a>
              </li>
              <button type="button" className="btn btn-light button nav-item">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="content text-center">
          <h1 className="text-white mainHead">
            Grow your mind and better <br></br>opportunities you will find
          </h1>
          <h3 className="text-white subHead">
            Be a good achiever, shape your career
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
