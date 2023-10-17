import React from 'react'

export default function TestimonialNavigation() {
    const navigationCount = 3

    return (
        <div className="testimonial__rating__navigation">
            {Array.from({ length: navigationCount }).map((_, index) => (
                <div key={index} className="testimonial__rating__navigation__page"></div>
            ))}
        </div>
    )
}
