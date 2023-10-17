import React from 'react'

export default function TestimonialStat({ item }) {
    return (
        <div className="testimonial__stats__stat">
            <div className="testimonial__stats__stat__background"></div>
            <h2>{item.number}</h2>
            <p>{item.stat}</p>
        </div>
    )
}
