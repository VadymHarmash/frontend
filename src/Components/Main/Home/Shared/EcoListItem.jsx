import React from 'react'

export default function EcoListItem({ item }) {
    return (
        <li>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </li>
    )
}
