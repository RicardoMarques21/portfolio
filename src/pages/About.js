import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="about"
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            <h2>About Me</h2>
            <p>
                <p>Hi, I'm Ricardo Marques — an aspiring software developer currently enrolled in the Switch Dev Programme by Porto Tech Hub.</p>
                <p>I'm passionate about building robust applications and exploring the world of DevOps and modern web technologies.</p>
                <p>With a growing foundation in Java, Spring Boot, React, and Docker, I'm continuously learning and applying my skills to real-world projects.</p>
                <p>I'm currently seeking an internship where I can contribute, grow, and work alongside experienced developers.</p>
                <p>Welcome to my portfolio!</p>
            </p>
        </section>
    );
}
