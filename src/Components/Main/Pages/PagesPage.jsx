import React from 'react'
import PagesBanner from './PagesBanner'
import PagesGrow from './PagesGrow/PagesGrow'
import PagesOrganic from './PagesOrganic'

export default function PagesPage() {
    return (
        <div className='pages-page'>
            <PagesBanner />
            <PagesGrow />
            <PagesOrganic />
        </div>
    )
}
