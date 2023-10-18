import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsPost({ post }) {
    return (
        <div className="news__posts__post">
            <div className="news__posts__post__content">
                <span>By {post.author}</span>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <Link to='/'>Read More</Link>
            </div>
        </div>
    )
}
