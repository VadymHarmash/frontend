import React, { useEffect, useState } from 'react';

export default function ThanksPage({ setUpdatedProductsArray }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        setUpdatedProductsArray([])
    }, [])

    return (
        <div className='thanks-page'>
            <div className="container">
                <div className="thanks-page__wrapper">
                    <h2>Thank you for your order</h2>
                </div>
            </div>
            <div className="thanks-page__image"></div>
        </div>
    );
}
