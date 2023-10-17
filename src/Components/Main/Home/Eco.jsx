import React from 'react'
import EcoList from './Shared/EcoList'

export default function Eco() {
    return (
        <div className="eco">
            <div className="container">
                <div className="wrapper eco__wrapper">
                    <div className="eco__content">
                        <h3>Eco Friendly</h3>
                        <h2>Econis is a Friendly Organic Store</h2>
                        <EcoList />
                    </div>
                </div>
            </div>
        </div>
    )
}
