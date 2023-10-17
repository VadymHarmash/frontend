import React from 'react'
import AboutReason from './AboutReason'

export default function AboutReasons() {
    const reasons = [
        {
            title: '100% Natural Product',
            description: 'Simply dummy text of the printing and typesetting industry Lorem Ipsum'
        },
        {
            title: 'Increases resistance',
            description: 'Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing'
        }
    ]

    return (
        <ul>
            {reasons.map((reason, index) => (
                <AboutReason
                    key={index}
                    reason={reason} />
            ))}
        </ul>
    )
}
