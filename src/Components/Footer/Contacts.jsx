import React from 'react'
import Logo from './../Header/Logo'
import instagram from './../../assets/icons/instagram.svg'
import facebook from './../../assets/icons/facebook.svg'
import twitter from './../../assets/icons/twitter.svg'
import pinterest from './../../assets/icons/pinterest.svg'

export default function Contacts() {
    const contacts = [
        {
            method: 'Email',
            address: 'needhelp@Organia.com'
        },
        {
            method: 'Phone',
            address: '666 888 888'
        },
        {
            method: 'Address',
            address: '88 road, borklyn street, USA'
        }
    ]

    const socialMedias = [
        instagram,
        facebook,
        twitter,
        pinterest
    ]

    const utilities = [
        'Style Guide',
        '404 Not Found',
        'Password Protected',
        'Licences',
        'Changelog'
    ]

    return (
        <div className="contacts">
            <div className="container">
                <div className="wrapper contacts__wrapper">
                    <div className="contacts__list">
                        <h3>Contact Us</h3>
                        <ul>
                            {contacts.map((contact, index) => (
                                <li key={index}>
                                    <h4>{contact.method}</h4>
                                    <p>{contact.address}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contacts__medias">
                        <Logo />
                        <span>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</span>
                        <ul>
                            {socialMedias.map((socialMedia, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <img src={socialMedia} alt={socialMedia} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contacts__utilities">
                        <h3>Utility Pages</h3>
                        <ul>
                            {utilities.map((utility, index) => (
                                <li key={index}>
                                    <a href="#">{utility}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
