import React from 'react';
import './Footer.css';
import home from '../../Icons/home.svg';
import bookmark from '../../Icons/bookmark.svg';
import shopping from '../../Icons/shopping-bag.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-content">
            <img className="home-icon" src={home} alt="" />
            <Link to="/Product"><button className="bookmark-btn"><img src={bookmark} alt="" /></button></Link>
            <img className="shop-icon" src={shopping} alt="" />
        </div>
    );
};

export default Footer;