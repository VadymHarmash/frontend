import React, { useEffect, useState } from 'react'
import OrderListInfo from './OrderListItems/OrderListInfo'
import OrderQuantity from './OrderListItems/OrderQuantity'
import TotalPrice from './OrderListItems/TotalPrice'
import OrderForm from './OrderListItems/OrderForm'

export default function OrderList({ setIsOrderPlaced, updatedProductsArray, setUpdatedProductsArray, recountProducts }) {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const [showForm, setShowForm] = useState(false)

    const deleteProduct = (productToDelete) => {
        const filteredProducts = updatedProductsArray.filter((product) => product !== productToDelete)
        setUpdatedProductsArray(filteredProducts)
    }

    useEffect(() => {
        let priceWithoutDiscount = 0
        let totalDiscount = 0
        let totalCost = 0
        for (let product of updatedProductsArray) {
            const price = parseFloat(product.product.price.replace('$', '') * product.quantity)
            const discount = parseFloat((product.product.discountPrice !== null ?
                Math.abs((product.product.price.replace('$', '') * product.quantity) - (product.product.discountPrice.replace('$', '') * product.quantity))
                : 0))
            priceWithoutDiscount += price
            totalDiscount += discount
        }
        setTotalPrice(priceWithoutDiscount)
        setTotalDiscount(totalDiscount)
        totalCost = priceWithoutDiscount - totalDiscount
        setTotalCost(totalCost)
    }, [updatedProductsArray])

    return (
        <div className="order-list">
            <div className="container">
                <div className="order-list__wrapper">
                    {updatedProductsArray.map((product, index) => (
                        <div className="order-list__product" key={index}>
                            <OrderListInfo product={product} />
                            <OrderQuantity product={product} />
                            <button className="order-list__product__delete-button" onClick={() => {
                                deleteProduct(product)
                                recountProducts()
                            }}>X</button>
                        </div>
                    ))}
                    <TotalPrice totalDiscount={totalDiscount} totalCost={totalCost} />

                    {!showForm ? <button className='order-list__to-order' onClick={() => setShowForm(true)}>To order</button> : null}
                    {showForm ? <OrderForm 
                                    productsToBuy={updatedProductsArray} 
                                    totalCost={totalCost} 
                                    setIsOrderPlaced={setIsOrderPlaced} /> : null}
                </div>
            </div>
        </div>
    )
}
