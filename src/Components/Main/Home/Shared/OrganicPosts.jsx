import React from 'react'
import { Link } from 'react-router-dom'

export default function OrganicPosts() {
    const postTitles = [
        "Organic Juice",
        "Organic Food",
        "Nuts Cookis"
    ];

    return (
        <div className="organics__wrapper">
            {postTitles.map((title, index) => (
                <div className="organics__post" key={index}>
                    <Link to='/'>{title}</Link>
                </div>
            ))}
        </div>
    )
}
