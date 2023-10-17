import React from 'react'

export default function Price({ product }) {
    return (
        <div className="price">
            <p className={!product.discountPrice ? 'actual-price' : 'non-actual-price'}>{product.price}</p>
            <p className={!product.discountPrice ? 'non-actual-price' : 'actual-price'}>{product.discountPrice}</p>
        </div>
    )
}
