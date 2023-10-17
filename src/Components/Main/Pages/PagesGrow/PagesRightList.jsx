import React from 'react'
import PagesListItem from './PagesListItem'

export default function PagesRightList() {
    const rightList = [
        {
            title: 'Agricultural Services',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.'
        },
        {
            title: 'Organic Products',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.'
        },
        {
            title: 'Fresh Vegetables',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.'
        }
    ]

    return (
        <ul className='pages-page__grow__content__right-list pages-page__grow__content__list'>
            {rightList.map((item, index) => (
                <PagesListItem
                    key={index}
                    item={item} />
            ))}
        </ul>
    )
}
