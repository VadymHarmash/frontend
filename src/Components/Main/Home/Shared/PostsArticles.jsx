import React from 'react'
import PostsArticle from './PostsArticle'

export default function PostsArticles() {
    const posts = [
        {
            subtitle: 'Natural!!',
            description: 'Get Garden Fresh Fruits',
            classes: [
                'posts__post',
                'posts__natural-post'
            ]
        },
        {
            subtitle: 'Offer!!',
            description: 'Get 10% off on Vegetables',
            classes: [
                'posts__post',
                'posts__offer-post'
            ]
        }
    ]

    return (
        <div className="posts__wrapper">
            {posts.map((post, index) => (
                <PostsArticle
                    key={index}
                    post={post} />
            ))}
        </div>
    )
}
