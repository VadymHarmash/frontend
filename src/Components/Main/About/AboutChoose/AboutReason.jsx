import React from 'react'

export default function AboutReason({ reason }) {
    return (
        <li>
            <div className="reason">{reason.title}</div>
            <p>{reason.description}</p>
        </li>
    )
}
