import React from 'react'

export default function PagesListItem({item}) {
    return (
        <li>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </li>
    )
}
