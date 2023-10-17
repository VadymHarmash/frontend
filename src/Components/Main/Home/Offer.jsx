import React, { useState } from 'react'
import Product from './Product/Product'

export default function Offer({ products }) {
    const offerProducts = products.slice(12, 16)
    const [totalCount, setTotalCount] = useState(0)

    const totalCountUpdater = () => {
        setTotalCount(totalCount)
    }

    return (
        <div className='offer'>
            <div className="container">
                <div className="wrapper offer__wrapper">
                    <h3>Offer</h3>
                    <h2>We Offer Organic For You</h2>
                    <div className="offer__products">
                        {offerProducts.map((product) => (
                            <Product 
                                key={product._id} 
                                product={product} 
                                tempArray={offerProducts} 
                                totalCountUpdater={totalCountUpdater} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
