import React from 'react'
import Form from '../Home/Form'
import Projects from './Projects'
import ProjectsBanner from './ProjectsBanner'

export default function ProjectsPage() {
    return (
        <div className='projects-page'>
            <ProjectsBanner />
            <div className="container">
                <div className="projects-page__wrapper">
                    <Projects />
                    <Form />
                </div>
            </div>
        </div>
    )
}
