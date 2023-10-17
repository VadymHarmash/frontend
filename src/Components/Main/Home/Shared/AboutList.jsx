import React from 'react'
import AboutListItem from './AboutListItem'

export default function AboutList() {
    const listItems = [
        {
            title: 'Organic Foods Only',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            title: 'Quality Standards',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        }
    ]

    return (
        <ul>
            {listItems.map((item, index) => (
                <AboutListItem 
                    key={index}
                    item={item} />
            ))}
        </ul>
    )
}
