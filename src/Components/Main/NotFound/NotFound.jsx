import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <div className="not-found__wrapper">
                    <div className="not-found__content">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                        <p>The page you are looking for doesn't exist or has been moved</p>
                        <NavLink to="/">Go to Homepage</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
