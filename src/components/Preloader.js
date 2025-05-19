import React from 'react';
import '../styles/Preloader.css';
import { FaInfinity } from 'react-icons/fa';

export default function Preloader() {
    return (
        <div className="preloader">
            <div className="infinity-container">
                <FaInfinity className="animated-infinity" />
            </div>
            <p>Loading Portfolio...</p>
        </div>
    );
}
