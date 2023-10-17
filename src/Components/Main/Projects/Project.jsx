import React from 'react'

export default function Project({ project }) {
    return (
        <div className="projects-page__projects__project">
            <div className="projects-page__projects__project__image image">
                <div className="projects-page__projects__project__image__next"></div>
            </div>
            <h2>{project.title}</h2>
            <h3>{project.category}</h3>
        </div>
    )
}
