import React, { useEffect } from 'react'
import Products from '../Home/Products'
import Form from '../Home/Form'
import ShopBanner from './ShopBanner'

export default function ShopPage({ products, totalCountUpdater, productsArray }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className="shop-page">
            <ShopBanner />
            <div className="container">
                <div className="shop-page__wrapper">
                    <Products
                        products={products}
                        totalCountUpdater={totalCountUpdater}
                        productsArray={productsArray} />
                    <Form />
                </div>
            </div>
        </div>
    )
}
