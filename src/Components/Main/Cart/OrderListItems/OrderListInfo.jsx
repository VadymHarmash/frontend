import React from 'react'

export default function OrderListInfo({ product }) {
    return (
        <div className="order-list__product__info">
            <div className="image">
                <img src={product.product.image} alt={product.product.name} />
            </div>
            <p>{product.product.name}</p>
            <div className="price">
                <p className={!product.product.discountPrice ? 'actual-price' : 'non-actual-price'}>{product.product.price}</p>
                <p className={!product.product.discountPrice ? 'non-actual-price' : 'actual-price'}>{product.product.discountPrice}</p>
            </div>
        </div>
    )
}
