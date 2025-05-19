import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css'

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="projects"
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            <h2>Projects</h2>
            <ul>
                <li>Project 1 - Portal AI (PAI)</li>
                <li>Project 2 - Portfolio website</li>
                <li>Project 3 - Todo list with backend</li>
            </ul>
        </section>
    );
}
