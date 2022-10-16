import React from "react";
import "./Story.css";
import US from "../../assets/tutoring.jpg";

const Story = () => {
  return (
    <>
      <section id="story">
        <div className="about">
          <h2 className="story-heading">
            The story of Tutor <br></br>Master?
          </h2>
          <p className="about-tutor-master">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            saepe similique dignissimos natus velit magnam, officiis autem quo
            provident voluptas esse quasi obcaecati eum explicabo
          </p>
          <ul className="checklist">
            <li className="listItem">
              USP #1 showcased here with brief as needed
            </li>
            <li className="listItem">
              USP #1 showcased here with brief as needed
            </li>
            <li className="listItem">
              USP #1 showcased here with brief as needed
            </li>
          </ul>
          <button type="button" className="detail-button">
            Know More
          </button>
        </div>
        <div className="image-section">
          <div className="image-container">
            <img src={US} alt="tutor" className="tutoring-image"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
