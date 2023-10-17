import React from 'react'
import TestimonialStat from './TestimonialStat'

export default function TestimonialStats() {
    const stats = [
        {
            number: '100%',
            stat: 'Organic'
        },
        {
            number: '285',
            stat: 'Active Product'
        },
        {
            number: '350+',
            stat: 'Organic Orchads'
        },
        {
            number: '25+',
            stat: 'Years of Farming'
        }
    ]

    return (
        <div className="testimonial__stats">
            {stats.map((item, index) => (
                <TestimonialStat
                    key={index}
                    item={item} />
            ))}
        </div>
    )
}
