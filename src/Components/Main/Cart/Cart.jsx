import React, { useEffect, useState } from 'react';
import CartBanner from './CartBanner';
import OrderList from './OrderList';
import ThanksPage from './OrderListItems/ThanksPage';

export default function Cart({ updatedProductsArray, setUpdatedProductsArray, totalCountUpdater }) {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false)

    const countQuantity = () => {
        const newTotalCount = updatedProductsArray.reduce((total, currentProduct) => total + currentProduct.quantity, 0)
        totalCountUpdater(newTotalCount)
    }

    useEffect(() => {
        countQuantity()
    }, [updatedProductsArray])

    useEffect(() => {
        if (isOrderPlaced) {
            setUpdatedProductsArray([])
        }
    }, [isOrderPlaced, setUpdatedProductsArray])

    return (
        <div className="cart">
            {!isOrderPlaced ?
                <>
                    <CartBanner />
                    <OrderList 
                        setIsOrderPlaced={setIsOrderPlaced} 
                        updatedProductsArray={updatedProductsArray} 
                        setUpdatedProductsArray={setUpdatedProductsArray} 
                        recountProducts={countQuantity} />
                </>
                :
                <ThanksPage 
                    setUpdatedProductsArray={setUpdatedProductsArray}
                />
            }
        </div>
    );
}
