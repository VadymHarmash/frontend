import React from 'react'

export default function AboutListItem({ item }) {
    return (
        <li>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </li>
    )
}
