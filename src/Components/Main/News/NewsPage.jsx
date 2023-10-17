import React, { useEffect } from 'react'
import NewsBanner from './NewsBanner'
import News from '../Home/News'
import Form from '../Home/Form'
import NewsPosts from '../Home/Shared/NewsPosts'

export default function NewsPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className="news-page">
            <NewsBanner />
            <div className="container">
                <div className="news-page__wrapper">
                    <NewsPosts isFull={true} />
                    <Form />
                </div>
            </div>
        </div>
    )
}
