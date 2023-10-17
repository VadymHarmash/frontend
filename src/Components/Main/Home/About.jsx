import React from 'react'
import fruits from './../../../assets/images/fruits.png'
import { NavLink } from 'react-router-dom'
import AboutList from './Shared/AboutList'

export default function About() {
    return (
        <div className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__image">
                        <img src={fruits} alt="Fruits" />
                    </div>
                    <div className="about__content">
                        <h3>About Us</h3>
                        <h2>We Believe in Working Accredited Farmers</h2>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <AboutList />
                        <NavLink to="/shop" className="about__content__shop-now">Shop Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
