import React from 'react';
import { FaDocker } from 'react-icons/fa';
import './Preloader.css';

export default function Preloader() {
    return (
        <div className="preloader">
            <FaDocker className="preloader-icon" />
            <p>Loading Portfolio...</p>
        </div>
    );
}
