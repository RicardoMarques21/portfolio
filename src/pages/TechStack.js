import React from 'react';
import { useInView } from 'react-intersection-observer';
import {FaAws, FaDatabase, FaDocker, FaGitAlt, FaJava, FaJenkins, FaNodeJs, FaReact} from "react-icons/fa";
import {SiJavascript, SiKubernetes, SiMongodb, SiPostgresql, SiSpringboot} from "react-icons/si";

export default function TechStack() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="techstack"
            ref={ref}
            className={`fade-in-section techstack-section ${inView ? 'is-visible' : ''}`}
        >

            {/* DevOps + Stack */}
            <div className="devops-animations">
                <h3>DevOps Skills & Tools</h3>
                <div className="icons-container">
                    <div className="icon-with-label"><FaDocker className="devops-icon" /><span>Docker</span></div>
                    <div className="icon-with-label"><SiKubernetes className="devops-icon" /><span>Kubernetes</span></div>
                    <div className="icon-with-label"><FaJenkins className="devops-icon" /><span>Jenkins</span></div>
                    <div className="icon-with-label"><FaGitAlt className="devops-icon" /><span>Git</span></div>
                    <div className="icon-with-label"><FaAws className="devops-icon" /><span>AWS</span></div>
                </div>

                <h3>Programming & Frameworks</h3>
                <div className="icons-container">
                    <div className="icon-with-label"><FaJava className="devops-icon" /><span>Java</span></div>
                    <div className="icon-with-label"><SiSpringboot className="devops-icon" /><span>Spring Boot</span></div>
                    <div className="icon-with-label"><SiJavascript className="devops-icon" /><span>JavaScript</span></div>
                    <div className="icon-with-label"><FaReact className="devops-icon" /><span>React</span></div>
                    <div className="icon-with-label"><FaNodeJs className="devops-icon" /><span>Node.js</span></div>
                </div>

                <h3>Databases</h3>
                <div className="icons-container">
                    <div className="icon-with-label"><SiPostgresql className="devops-icon" /><span>PostgreSQL</span></div>
                    <div className="icon-with-label"><SiMongodb className="devops-icon" /><span>MongoDB</span></div>
                    <div className="icon-with-label"><FaDatabase className="devops-icon" /><span>H2 / SQL</span></div>
                </div>
            </div>
        </section>
    );
}
