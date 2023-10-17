import React from 'react'

export default function Image({ product }) {
    return (
        <div className="image">
            <img src={product.image} alt={product.name} />
        </div>
    )
}
