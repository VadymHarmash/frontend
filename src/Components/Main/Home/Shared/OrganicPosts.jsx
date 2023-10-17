import React from 'react'

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
                    <a href="#">{title}</a>
                </div>
            ))}
        </div>
    )
}
