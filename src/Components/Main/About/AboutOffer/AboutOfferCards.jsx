import React from 'react'
import AboutOfferCard from './AboutOfferCard'

export default function AboutOfferCards() {
    const offers = [
        'Spicy',
        'Nuts & Feesd',
        'Fruits',
        'Vegetable'
    ]

    return (
        <div className='about-page__offer__cards'>
            {offers.map((offer, index) => (
                <AboutOfferCard
                    key={index}
                    offer={offer} />
            ))}
        </div>
    )
}
