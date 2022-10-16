import React from "react";
import "./Mentors.css";
import Profile from "../../assets/profile.jpg";

const Mentors = () => {
    return (
        <>
            <h1 className="services-heading color-blue">Who will train you?</h1>
            <h5 className="services-heading color-black">
                Tutor Master will cover the following topics
            </h5>
            <div className=".mentors-section">
                <div className="mentors-container">
                    <div className="mentors-box">
                        <div className="mentors-heading">
                            <h2>James Williams</h2>
                        </div>
                        <img src={Profile} alt="mentor"></img>
                        <div className="mentors-text">
                            <p>
                                BSc MSc <br></br> Cardiology
                            </p>
                            <a href="https://google.com">Know More</a>
                        </div>
                    </div>
                    <div className="mentors-box">
                        <div className="mentors-heading">
                            <h2>James Williams</h2>
                        </div>
                        <img src={Profile} alt="mentor"></img>
                        <div className="mentors-text">
                            <p>
                                BSc MSc <br></br> Cardiology
                            </p>
                            <a href="https://google.com">Know More</a>
                        </div>
                    </div>
                    <div className="mentors-box">
                        <div className="mentors-heading">
                            <h2>James Williams</h2>
                        </div>
                        <img src={Profile} alt="mentor"></img>
                        <div className="mentors-text">
                            <p>
                                BSc MSc <br></br> Cardiology
                            </p>
                            <a href="https://google.com">Know More</a>
                        </div>
                    </div>
                    <div className="mentors-box">
                        <div className="mentors-heading">
                            <h2>James Williams</h2>
                        </div>
                        <img src={Profile} alt="mentor"></img>
                        <div className="mentors-text">
                            <p>
                                BSc MSc <br></br> Cardiology
                            </p>
                            <a href="https://google.com">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mentors;
