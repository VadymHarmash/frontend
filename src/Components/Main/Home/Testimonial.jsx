import React from 'react'
import Stars from './Shared/Stars'
import TestimonialStats from './Shared/TestimonialStats'
import TestimonialNavigation from './Shared/TestimonialNavigation'

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <div className="container">
                <div className="testimonial__wrapper">
                    <h3>Testimonial</h3>
                    <h2>What Our Customer Saying?</h2>
                    <div className="testimonial__rating">
                        <div className="testimonial__rating__photo"></div>
                        <div className="testimonial__rating__stars">
                            <Stars />
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h4>Sara Taylor</h4>
                        <h5>Consumer</h5>
                        <TestimonialNavigation />
                    </div>
                    <TestimonialStats />
                </div>
            </div>
        </div>
    )
}
