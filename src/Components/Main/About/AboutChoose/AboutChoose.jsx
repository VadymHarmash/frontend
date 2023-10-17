import React from 'react'
import AboutReasons from './AboutReasons'
import AboutCards from './AboutCards'

export default function AboutChoose() {
    return (
        <div className="about-page__choose">
            <div className="container">
                <div className="about-page__choose__wrapper">
                    <div className="about-page__choose__content">
                        <h3>Why Choose us?</h3>
                        <h2>We do not buy from the open market & traders.</h2>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                        <AboutReasons />
                    </div>
                    <div className="about-page__choose__image"></div>
                </div>
                <AboutCards />
            </div>
        </div>
    )
}
