import React from 'react'

export default function AboutOfferCard({ offer }) {
    return (
        <div className='about-page__offer__cards__card'>
            <div className="image"></div>
            <p>{offer}</p>
        </div>
    )
}
