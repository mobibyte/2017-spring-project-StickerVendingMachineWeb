import React from 'react';

import Counter from './Counter';

const Product = ({ product, onItemUpdate, index }) => {

    const { title, imageUrl, count } = product;

    const _onAdd = () => {
        product.count++;
        onItemUpdate(product, index);
    }

    const _onRemove = () => {
        if(product.count < 1) return;
        product.count--;
        onItemUpdate(product, index);
    }

    return (
        <div className="product-item">
            <div className="product-image">
                <img src={imageUrl} />
            </div>

            <div className="product-content">
                <div className="product-title">{title}</div>
                <Counter onAdd={_onAdd} onRemove={_onRemove} count={count} />
            </div>
        </div>
    );
}

export default Product;