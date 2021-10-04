import React from 'react';
import './ProductsCart.css';
import backArrow from '../../Icons/arrow-left.svg';
import threeDot from '../../Icons/more-horizontal.svg';
import firstProduct from '../../Images/product2.png';
import deleteImage from '../../Icons/trash-2.svg';
import SecondProduct from '../../Images/product1.png';
import ThirdProduct from '../../Images/product3.png';
import FourthProduct from '../../Images/product4.png';
import { Link } from 'react-router-dom';

const ProductsCart = () => {
    return (
        <div className="cart-content">
            <div className="cart-navbar">
                <Link to="/product"><img src={backArrow} alt="" /></Link>
                <h3>Cart</h3>
                <img className="three-dot" src={threeDot} alt="" />
            </div>
            <div className="cart-product">
                <div className="cart-product-img">
                    <img src={firstProduct} alt="" />
                </div>
                <div className="cart-product-details">
                    <h4>Nashville Armchair</h4>
                    <p>Quantity: 1</p>
                    <p>Color: Royal blue</p>
                    <button>
                        <img src={deleteImage} alt="" /><span>Remove</span>
                    </button>
                </div>
                <div className="cart-product-price">
                    <p>$1,895</p>
                </div>
            </div>
            <div className="cart-product">
                <div className="cart-product-img">
                    <img src={SecondProduct} alt="" />
                </div>
                <div className="cart-product-details">
                    <h4>elisa wingback chair</h4>
                    <p>Quantity: 1</p>
                    <p>Color: blossom pink</p>
                    <button>
                        <img src={deleteImage} alt="" /><span>Remove</span>
                    </button>
                </div>
                <div className="cart-product-price">
                    <p>$1,512</p>
                </div>
            </div>
            <div className="cart-product">
                <div className="cart-product-img">
                    <img src={ThirdProduct} alt="" />
                </div>
                <div className="cart-product-details">
                    <h4>ellington office chair</h4>
                    <p>Quantity: 1</p>
                    <p>Color: Royal blue</p>
                    <button>
                        <img src={deleteImage} alt="" /><span>Remove</span>
                    </button>
                </div>
                <div className="cart-product-price">
                    <p>$13,834</p>
                </div>
            </div>
            <div className="cart-product">
                <div className="cart-product-img">
                    <img src={FourthProduct} alt="" />
                </div>
                <div className="cart-product-details">
                    <h4>chaise corner sofa</h4>
                    <p>Quantity: 1</p>
                    <p>Color: Royal blue</p>
                    <button>
                        <img src={deleteImage} alt="" /><span>Remove</span>
                    </button>
                </div>
                <div className="cart-product-price">
                    <p>$82,000</p>
                </div>
            </div>

            <div className="buy-product">
                <div className="total-price">
                    <p>Total Price for 4 item(s)</p>
                    <h1>₹‭99,241‬</h1>
                </div>
                <div className="bue-btn">
                    <Link to="/home"><button>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCart;