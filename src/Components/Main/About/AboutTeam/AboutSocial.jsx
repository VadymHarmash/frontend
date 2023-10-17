import React from 'react'
import instagram from './../../../../assets/icons/instagram.svg'
import facebook from './../../../../assets/icons/facebook.svg'
import twitter from './../../../../assets/icons/twitter.svg'

export default function AboutSocial({ teammate }) {
    const socialMediaIcons = [
        { name: 'instagram', icon: instagram, alt: 'Instagram' },
        { name: 'facebook', icon: facebook, alt: 'Facebook' },
        { name: 'twitter', icon: twitter, alt: 'Twitter' }
    ]

    return (
        <div className="social-medias">
            {socialMediaIcons.map((socialMedia, index) => (
                teammate.social[socialMedia.name] && (
                    <a key={index} href="#">
                        <img src={socialMedia.icon} alt={socialMedia.alt} />
                    </a>
                )
            ))}
        </div>
    )
}
