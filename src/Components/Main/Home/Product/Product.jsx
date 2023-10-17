import React, { useState } from 'react'
import Stars from '../Shared/Stars';
import Modal from './Modal';
import Price from './Price';
import Image from './Image';

export default function Product({ product, tempArray, totalCountUpdater }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <div className="products__cards__card offer__products__product">
            <div onClick={openModal}>
                <span className='category products__cards__card__category'>{product.category}</span>
                <Image product={product} />
                <div className='name products__cards__card__name'>{product.name}</div>
                <div className="products__cards__card__rates">
                    <Price product={product} />
                    <Stars />
                </div>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                product={product} 
                tempArray={tempArray} 
                totalCountUpdater={totalCountUpdater} />
        </div>
    );
}