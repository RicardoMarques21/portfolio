import React from 'react';
import { useInView } from 'react-intersection-observer';
import profilePic from '../assets/Foto.jpg';


export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="home"
            ref={ref}
            className={`fade-in-section home-section ${inView ? 'is-visible' : ''}`}
        >
            {/* Imagem + texto lado a lado */}
            <div className="photo-text-container">
                <img src={profilePic} alt="Ricardo Marques" className="profile-pic" />
                <div className="home-text">
                    <h2>Welcome!</h2>
                </div>
            </div>
        </section>
    );
}
