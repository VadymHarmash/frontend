import React from 'react'

export default function PostsArticle({ post }) {
    return (
        <div className={post.classes.join(' ')}>
            <h3>{post.subtitle}</h3>
            <h2>{post.description}</h2>
        </div>
    )
}
