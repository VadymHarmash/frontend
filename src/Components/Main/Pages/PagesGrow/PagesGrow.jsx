import React from 'react'
import PagesLeftList from './PagesLeftList'
import PagesRightList from './PagesRightList'
import pistachios from './../../../../assets/images/pages-pistachios.png'

export default function PagesGrow() {    
    return (
        <div className="pages-page__grow">
            <div className="container">
                <div className="pages-page__grow__wrapper">
                    <h3>What we Grow</h3>
                    <h2>Better Agriculture for Better Future</h2>
                    <div className="pages-page__grow__content">
                        <PagesLeftList />
                        <div className="pages-page__grow__content__image">
                            <img src={pistachios} alt="Pistachios" />
                        </div>
                        <PagesRightList />
                    </div>
                    <a href="#">Explore More</a>
                </div>
            </div>
        </div>
    )
}
