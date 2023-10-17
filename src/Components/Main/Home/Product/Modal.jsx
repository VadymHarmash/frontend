import React, { useState } from 'react';
import Stars from '../Shared/Stars';
import Price from './Price';
import InfoButtons from './InfoButtons';
import Image from './Image';

export default function Modal({ isOpen, onClose, product, tempArray = [], totalCountUpdater }) {
    const [quantity, setQuantity] = useState(0)

    const handleInput = (event) => {
        let inputValue = event.target.value
        let parsedValue = parseInt(inputValue)
        if (isNaN(parsedValue)) parsedValue = 0
        setQuantity(parsedValue)
    }

    function sendToCart() {
        if (quantity > 0) {
            tempArray.push(
                {
                    product: product,
                    quantity: quantity
                }
            )
        }

        setQuantity(0)
        onClose()
    }

    const countQuantity = () => {
        const newTotalCount = tempArray.reduce((total, currentProduct) => total + currentProduct.quantity, 0)
        totalCountUpdater(newTotalCount)
    }

    if (!isOpen) return null

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="wrapper modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="modal__content__header">
                    <span className='category modal__content__category'>{product.category}</span>
                    <button className="modal__content__close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal__content__body">
                    <Image product={product} />
                    <div className="modal__content__info">
                        <h2 className='name modal__content__name'>{product.name}</h2>
                        <Stars />
                        <Price product={product} />
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className="modal__content__quantity">
                            <span>Quantity:</span>
                            <input type="text" placeholder='0' value={quantity} onChange={handleInput} />
                            <button onClick={() => {
                                sendToCart()
                                countQuantity()
                            }}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <InfoButtons />
            </div>
        </div>
    );
}