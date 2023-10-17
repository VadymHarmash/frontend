import React from 'react'

export default function AboutCard({ card }) {
    return (
        <div className="about-page__choose__cards__card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    )
}
