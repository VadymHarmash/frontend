import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="wrapper banner__wrapper">
                    <div className="banner__content">
                        <h3>100% Natural Food</h3>
                        <h1>Choose the best healthier way of life</h1>
                        <Link to='/'>Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
