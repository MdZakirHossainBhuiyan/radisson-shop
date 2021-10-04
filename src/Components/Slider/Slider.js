import React from 'react';
import './Slider.css';
import sliderImage1 from '../../Images/slider1.png';

const Slider = () => {
    return (
        <div className="slider-content">
            <div className="slider-properties">
                <p>Collection</p>
                <h1><span>New</span><br />Arrival</h1>
                <p className="slider-details">Lorem ipsum dolor sit amet consectetur</p>

                <button className="shop-btn">Shop Now</button>
            </div>
            <div className="slider-images">
                <img src={sliderImage1} alt="" />
            </div>
        </div>
    );
};

export default Slider;