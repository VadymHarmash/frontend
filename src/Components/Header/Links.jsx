import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Links() {
    const navLinks = [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/pages', text: 'Pages', class: 'pages' },
        { path: '/shop', text: 'Shop' },
        { path: '/projects', text: 'Projects' },
        { path: '/news', text: 'News' },
    ];

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && isBurgerMenuOpen) {
                setIsBurgerMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [isBurgerMenuOpen])

    return (
        <nav className={`header__links ${isBurgerMenuOpen ? 'burger-menu-open' : ''}`}>
            <div className={`burger-icon ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`header__links__list ${isBurgerMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path} className={`header__links__list__link ${link.class || ''}`}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
