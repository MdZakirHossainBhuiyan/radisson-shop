import React from "react";
import "./BestSellingProduct.css";
import productOne from '../../Images/product1.png';
import productTwo from '../../Images/product2.png';
import bookmark from '../../Icons/bookmark.svg';
import { Link } from "react-router-dom";

const BestSellingProduct = () => {
  return (
    <div className="sell-content">
      Best Selling
      <div className="product-card">
        <div className="card-content">
          <Link to="/product"><img src={productOne} alt="" /></Link>
          <h3>WingBack chair</h3>
          <p className="description">modern saddle arms and wooden legs.</p>
          <p className="price">₹ 1,512</p>
          <div className="bookmark">
            <img src={bookmark} alt="" />
          </div>
        </div>
        <div className="card-content">
          <Link to="/product"><img src={productTwo} alt="" /></Link>
          <h3>Nashville armchair</h3>
          <p className="description">curved with two tiers of comfort.</p>
          <p className="price">₹ 1,895</p>
          <div className="bookmark">
            <img src={bookmark} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
