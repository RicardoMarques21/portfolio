import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="contact"
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            <h2>Contact</h2>
            <p>You can reach me at <a href="mailto:ricardodrmarques@gmail.com">ricardodrmarques@gmail.com</a></p>
        </section>
    );
}
