import React from 'react'
import AboutCard from './AboutCard'

export default function AboutCards() {
    const cards = [
        {
            title: 'Return Policy',
            description: 'Simply dummy text of the printintypesetting industry.'
        },
        {
            title: '100% Fresh',
            description: 'Simply dummy text of the printintypesetting industry.'
        },
        {
            title: 'Support 24/7',
            description: 'Simply dummy text of the printintypesetting industry.'
        },
        {
            title: 'Secured Payment',
            description: 'Simply dummy text of the printintypesetting industry.'
        }
    ]

    return (
        <div className="about-page__choose__cards">
            {cards.map((card, index) => (
                <AboutCard 
                    key={index}
                    card={card} />
            ))}
        </div>
    )
}
