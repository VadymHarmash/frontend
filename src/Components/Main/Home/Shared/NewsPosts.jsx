import React from 'react'
import NewsPost from './NewsPost'

export default function NewsPosts({ isFull }) {
    const allPosts = [
        {
            author: 'Rachi Card',
            title: 'The Benefits of Vitamin D & How to Get It',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Our Favourite Summertime Tommeto',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Benefits of Vitamin C & How to Get It',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Research More Organic Foods',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: 'Everyday Fresh Fruites',
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        },
        {
            author: 'Rachi Card',
            title: "Don't Use Plastic Product! it's Kill Nature",
            description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        }
    ]

    return (
        <div className="news__posts">
            {isFull ?
                allPosts.map((post, index) => (
                    <NewsPost
                        key={index}
                        post={post} />
                ))
                :
                allPosts.slice(0, 2).map((post, index) => (
                    <NewsPost
                        key={index}
                        post={post} />
                ))
            }
        </div>
    )
}
