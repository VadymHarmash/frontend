import React from 'react'
import AboutTeammate from './AboutTeammate'

export default function AboutTeammates() {
    const teammates = [
        {
            name: 'Giovani Bacardo',
            specialty: 'Farmer',
            social: {
                instagram: false,
                facebook: true,
                twitter: true
            }
        },
        {
            name: 'Marianne Loreno',
            specialty: 'Designer',
            social: {
                instagram: true,
                facebook: true,
                twitter: true
            }
        },
        {
            name: 'Riga Pelore',
            specialty: 'Farmer',
            social: {
                instagram: true,
                facebook: true,
                twitter: true
            }
        }
    ]


    return (
        <div className="about-page__team__teammates">
            {teammates.map((teammate, index) => (
                <AboutTeammate
                    key={index}
                    teammate={teammate} />
            ))}
        </div>
    )
}
