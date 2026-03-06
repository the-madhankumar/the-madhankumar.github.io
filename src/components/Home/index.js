import { SquareUser, Linkedin, Github, Mail, SendHorizontal, Moon, Sun, FileText } from 'lucide-react';
import React, { useState } from 'react';
import { Divider, SkillsResolve, ProjectsResolve, WorkResolve, CertificatesResolve, EducationResolve } from '../utils/utils'

import about from '../Data/About';
import skills from '../Data/Skills';
import projects from '../Data/Projects';
import internships from '../Data/Work';
import certificates from '../Data/Certificates';
import education from '../Data/Education';

import './index.css'

const Home = () => {
    const [darkMode, setdarkMode] = useState(false);

    const toggle = () => setdarkMode(prev => !prev);

    return (
        <div className={`Main-container ${darkMode ? 'dark' : 'light'}`}>
            <div className='first-section'>
                <SquareUser />
                <span className='my-name'>MADHAN KUMAR M</span>
                <div className='my-links'>
                    <span>
                        <a href='mailto:madhankumarbusiness@gmail.com'>madhankumarbusiness@gmail.com</a>
                    </span>
                    <span>
                        <a href='https://github.com/the-madhankumar'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github />
                        </a>
                    </span>
                    <span>
                        <a href='https://linkedin.com/in/themadhankumarm'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin />
                        </a>
                    </span>
                    <span onClick={toggle}>
                        {darkMode ? <Moon /> : <Sun />}
                    </span>
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{about.title}</div>
                <div className='des'>
                    <div className='description'>{about.description}</div>

                    <a
                        href={about.resume}
                        download="Madhan-Kumar-M.pdf"
                        className='download-button'
                    >
                        <FileText className='download' />
                        Download CV
                    </a>
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{skills.title}</div>

                <div className='skills-container'>
                    {skills.categories?.map((category, index) => (
                        <SkillsResolve
                            key={index}
                            name={category.name}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{projects.title}</div>

                <div className='skills-container'>
                    <ProjectsResolve projects={projects.projects} />
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{internships.title}</div>

                <div className='skills-container'>
                    <WorkResolve work={internships.experiences} />
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{certificates.title}</div>

                <CertificatesResolve certificates={certificates.items} />
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{education.title}</div>

                <EducationResolve
                    education={education.items}
                    img={education.image}
                />
            </div>

            <Divider />

            <footer className="footer">
                <div className="footer-content">

                    <SendHorizontal className="footer-icon" />

                    <div className="footer-links">
                        <a href="mailto:madhankumarbusiness@gmail.com">
                            <Mail size={16} /> madhankumarbusiness@gmail.com
                        </a>

                        <span className="footer-separator">|</span>

                        <a
                            href="https://github.com/the-madhankumar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={16} /> GitHub
                        </a>

                        <span className="footer-separator">|</span>

                        <a
                            href="https://linkedin.com/in/themadhankumarm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin size={16} /> LinkedIn
                        </a>

                        <span className="footer-separator">|</span>

                        <span className="footer-copy">
                            © {new Date().getFullYear()} Madhan Kumar M
                        </span>

                    </div>

                    <SendHorizontal className="footer-icon flip-icon" />

                </div>
            </footer>
        </div>
    )
}

export default Home