import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import profileImage from "../../Images/profile.png";
import searchIcon from '../../Icons/search.svg';
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="top-content">
        <div className="search-field">
          <img src={searchIcon} alt="" />
        </div>
        <div className="profile">
          <img src={profileImage} alt="profileImage" />
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Home;
