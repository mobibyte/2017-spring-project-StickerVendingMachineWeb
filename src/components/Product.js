import React from 'react';

import Counter from './Counter';

const Product = () => {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src="http://placehold.it/150x150" alt=""/>
            </div>

            <div className="product-content">
                <div className="product-title">Product</div>
                <Counter/>
            </div>
        </div>
    );
}

export default Product;