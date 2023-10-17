import React from 'react'
import PagesListItem from './PagesListItem'

export default function PagesLeftList() {
    const leftList = [
        {
            title: 'Dairy Products',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'
        },
        {
            title: 'Store Services',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium Sed ut perspiciatis.'
        },
        {
            title: 'Delivery Services',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium Sed ut perspiciatis.'
        }
    ]

    return (
        <ul className='pages-page__grow__content__left-list pages-page__grow__content__list'>
            {leftList.map((item, index) => (
                <PagesListItem
                    key={index}
                    item={item} />
            ))}
        </ul>
    )
}
