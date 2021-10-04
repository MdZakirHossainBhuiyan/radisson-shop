import React from "react";
import Navbar from "../NavBar/NavBar";
import "./Product.css";
import bookmark from "../../Icons/bookmark.svg";
import sampleOne from "../../Images/product2.png";
import sampleTwo from "../../Images/sample1.png";
import sampleThree from "../../Images/sample2.png";
import sampleFour from "../../Images/sample3.png";
import sampleFive from "../../Images/sample4.png";
import shoppingCart from "../../Icons/shopping-cart.svg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-area">
      <Navbar />
      <img className="bookmarkImage" src={bookmark} alt="" />
      <div className="product-image">
        <img className="product-image-style" src={sampleOne} alt="" />
      </div>

      <div className="product-samples">
        <img id="sample-one" src={sampleOne} alt="" />
        <img src={sampleTwo} alt="" />
        <img src={sampleThree} alt="" />
        <img src={sampleFour} alt="" />
        <img src={sampleFive} alt="" />
      </div>

      <h2>Nashville Armchair</h2>
      <p className="product-price">$1,895</p>

      <div className="product-info">
        <div className="product-color">
          <h4>Color:</h4>
          <div className="color-btn">
            <div className="mark-btn">
              <button className="blue-btn"></button>
            </div>
            <button className="red-btn"></button>
            <button className="yellow-btn"></button>
            <button className="green-btn"></button>
          </div>
        </div>
        <div className="product-quantity">
          <h4>Quantity:</h4>
          <div className="quantity-info">
            <button>-</button>
            <input type="number" value="1" />
            <button>+</button>
          </div>
        </div>
      </div>

      <p className="product-detail">
        A contemporary twist on classic mid-century modern design, the Nashville
        armchair is upholstered in royal blue velvet and brings an air of
        sophistication to your living space. Available in a choice of rich
        velvet colours, the Nashville is also available as a 2-seater loveseat
        sofa.
      </p>

      <Link to="/products/cart">
        <button className="add-btn">
          <img src={shoppingCart} alt="" />
          <p>Add To Cart</p>
        </button>
      </Link>
    </div>
  );
};

export default Product;
