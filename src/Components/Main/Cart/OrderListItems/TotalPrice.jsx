import React from 'react'

export default function TotalPrice({ totalDiscount, totalCost }) {
    return (
        <div className="order-list__total-price">
            <p>Total cost: <span>{totalCost}$</span></p>
            <p>Discount: <span>{totalDiscount}$</span></p>
        </div>
    )
}
