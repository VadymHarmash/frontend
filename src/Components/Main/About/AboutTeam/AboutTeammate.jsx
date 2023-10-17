import React from 'react'
import AboutSocial from './AboutSocial'

export default function AboutTeammate({ teammate }) {
    return (
        <div className="about-page__team__teammates__teammate">
            <div className="image"></div>
            <h2>{teammate.name}</h2>
            <div className="additional-info">
                <h3>{teammate.specialty}</h3>
                <AboutSocial teammate={teammate} />
            </div>
        </div>
    )
}

