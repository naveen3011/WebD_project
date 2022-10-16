import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <>
            <section id="services">
                <h1 className="services-heading color-blue">
                    On what you will be trained!
                </h1>
                <h5 className="services-heading color-black">
                    Tutor Master will cover the following topics
                </h5>
                <div className="services-container">
                    <article className="services-item">
                        <h3 className="services-card-heading">Country Topics</h3>
                        <p className="services-card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="services-card-button">Know More</button>
                    </article>
                    <article className="services-item">
                        <h3 className="services-card-heading">Product Topics</h3>
                        <p className="services-card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="services-card-button">Know More</button>
                    </article>
                    <article className="services-item">
                        <h3 className="services-card-heading">Blanket Topics</h3>
                        <p className="services-card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <button className="services-card-button">Know More</button>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Services;
