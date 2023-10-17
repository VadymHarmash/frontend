import React from 'react'
import { NavLink } from 'react-router-dom'
import NewsPosts from './Shared/NewsPosts'

export default function News() {
    
    return (
        <div className="news">
            <div className="container">
                <div className="news__wrapper">
                    <h3>News</h3>
                    <div className="news__title">
                        <h2>Discover weekly content about organic food, & more</h2>
                        <NavLink to='/news' className='news__title__more' href="#">More News</NavLink>
                    </div>
                    <NewsPosts isFull={false} />
                </div>
            </div>
        </div>
    )
}
