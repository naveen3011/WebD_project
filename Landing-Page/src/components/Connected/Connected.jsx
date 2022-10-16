import React from "react";
import "./Connected.css";
import Profile from "../../assets/profile.jpg";

const Connected = () => {
  return (
    <>
      <section id="connected">
        <h1 className="services-heading color-blue">Stay Connected with us</h1>
        <h5 className="services-heading color-black">
          Tutor Master will cover the following topics
        </h5>
        <div className="connected-container">
          <div className="notifications">
            <div className="notifications-head">
              <div className="Noti">
                <h4 className="head">Notifications</h4>
              </div>
              <div className="markasread">
                <h4 className="head">Mark as read</h4>
              </div>
            </div>
            <div className="notifications-info">
              <div className="profileDiv">
                <div>
                  <img src={Profile} alt="profile" className="profile"></img>
                </div>
                <div>
                  <h1 className="notifications-subject">
                    Thomas added a new course on Cardiology
                  </h1>
                  <p className="notification-time">3mins ago</p>
                </div>
              </div>
            </div>
            <div className="notifications-info">
              <div className="profileDiv">
                <div>
                  <img src={Profile} alt="profile" className="profile"></img>
                </div>
                <div>
                  <h1 className="notifications-subject">
                    Thomas added a new course on Cardiology
                  </h1>
                  <p className="notification-time">3mins ago</p>
                </div>
              </div>
            </div>
            <div className="markasread">
              <h4 className="head">view all</h4>
            </div>
          </div>
          <div className="notifications">
            <div className="notifications-info">
              <div className="profileDiv">
                <div className="messageDiv">
                  <img src={Profile} alt="profile" className="profile"></img>
                </div>
                <div>
                  <h1 className="notifications-subject">James</h1>
                  <p className="notification-time">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita saepe similique dignissimos natus velit magnam,
                    officiis autem quo provident voluptas esse quasi obcaecati
                    eum explicabo
                  </p>
                </div>
              </div>
            </div>
            <div className="notifications-info">
              <div className="profileDiv">
                <div className="messageDiv">
                  <img src={Profile} alt="profile" className="profile"></img>
                </div>
                <div>
                  <h1 className="notifications-subject">James</h1>
                  <p className="notification-time">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita saepe similique dignissimos natus velit magnam,
                    officiis autem quo provident voluptas esse quasi obcaecati
                    eum explicabo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connected;
