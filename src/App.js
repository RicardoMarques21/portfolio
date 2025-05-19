import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechStack from "./pages/TechStack";
import Preloader from './components/Preloader';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Preloader />; // Mostra preloader antes de tudo
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/techstack" element={<TechStack />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
