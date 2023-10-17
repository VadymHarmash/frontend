import React from 'react'

export default function OrderQuantity({ product }) {
    return (
        <div className="order-list__product__quantity">
            <span>Quantity :</span>
            <input type="text" disabled value={product.quantity} />
        </div>
    )
}
