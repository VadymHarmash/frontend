import React from 'react'
import EcoListItem from './EcoListItem'

export default function EcoList() {
    const listItems = [
        {
            title: "Start with Our Company First",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        },
        {
            title: "Learn How to Grow Yourself",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        },
        {
            title: "Farming Strategies of Today",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
        }
    ]

    return (
        <ul>
            {listItems.map((item, index) => (
                <EcoListItem
                    key={index}
                    item={item} />
            ))}
        </ul>
    )
}
