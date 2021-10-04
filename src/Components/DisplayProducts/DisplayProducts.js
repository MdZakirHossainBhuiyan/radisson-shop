import React from 'react';
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct';
import TrendingProduct from '../TrendingProduct/TrendingProduct';

const DisplayProducts = () => {
    return (
        <div>
            <BestSellingProduct />
            <TrendingProduct />
        </div>
    );
};

export default DisplayProducts;