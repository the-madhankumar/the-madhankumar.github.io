import React, { useState } from 'react';
import { Divider } from '../utils/utils'

import './index.css'
import Profile from '../Pages/Profile'
import About from '../Pages/About';
import Skills from '../Pages/Skills'
import Project from '../Pages/Project';
import Internships from '../Pages/Internships';
import Certifications from '../Pages/Certifications';
import Contributions from '../Pages/Contributions';
import Education from '../Pages/Education';
import Footer from '../Pages/Footer';

const Home = () => {
    const [darkMode, setdarkMode] = useState(false);

    const toggle = () => setdarkMode(prev => !prev);

    return (
        <div className={`Main-container ${darkMode ? 'dark' : 'light'}`}>
            <Profile
                toggle={toggle}
                darkMode={darkMode}
            />
            <Divider />

            <About />
            <Divider />

            <Skills />
            <Divider />

            <Project />
            <Divider />

            <Internships />
            <Divider />

            <Certifications />
            <Divider />

            <Education />
            <Divider />

            <Contributions />
            <Footer />
        </div>
    )
}

export default Home