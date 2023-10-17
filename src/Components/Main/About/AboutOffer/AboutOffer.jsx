import React from 'react'
import AboutOfferCards from './AboutOfferCards'

export default function AboutOffer() {
    return (
        <div className="about-page__offer">
            <div className="container">
                <div className="about-page__offer__wrapper">
                    <h3>About Us</h3>
                    <h2>What We Offer for You</h2>
                    <AboutOfferCards />
                </div>
            </div>
        </div>
    )
}
