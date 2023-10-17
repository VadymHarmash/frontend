import React from 'react'
import star from './../../../../assets/icons/star.svg'

export default function Stars() {
    const starsCount = 5

    return (
        <div className='stars'>
            {Array.from({ length: starsCount }).map((_, index) => (
                <span key={index} className="star">
                    <img src={star} alt="Star" />
                </span>
            ))}
        </div>
    )
}
