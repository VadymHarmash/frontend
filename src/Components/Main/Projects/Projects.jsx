import React from 'react'
import Project from './Project'

export default function Projects() {
    const projects = [
        {
            title: 'Green & Tasty Lemon',
            category: 'Fruits'
        },
        {
            title: 'Organic Carrot',
            category: 'Farmer'
        },
        {
            title: 'Organic Betel Leaf',
            category: 'Leaf'
        },
        {
            title: 'Natural Tommato',
            category: 'Fruits'
        },
        {
            title: 'Black Raspberry',
            category: 'Farmer'
        },
        {
            title: 'Honey Orange',
            category: 'Farmer'
        }
    ]

    return (
        <div className="projects-page__projects">
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    project={project} />
            ))}
        </div>
    )
}
