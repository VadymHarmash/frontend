import React from 'react'

export default function NewsPost({ post }) {
    return (
        <div className="news__posts__post">
            <div className="news__posts__post__content">
                <span>By {post.author}</span>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    )
}
