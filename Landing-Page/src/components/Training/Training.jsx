import React from 'react';
import './Training.css';
import Heart from '../../assets/heartImage.png';

const Training = () => {
    return (
        <>
            <section id='training-section'>
                <h1 className="services-heading color-blue">Training Overview</h1>
                <div className='heart-image-div'>
                    <img src={Heart} alt="heart" className='heartImage'></img>
                </div>
            </section>
        </>
    )
}

export default Training;