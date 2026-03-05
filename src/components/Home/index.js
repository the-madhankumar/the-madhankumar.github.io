import { SquareUser, Linkedin } from 'lucide-react';
import { Divider, SkillsResolve, ProjectsResolve } from '../utils/utils'

import about from '../Data/About';
import skills from '../Data/Skills';
import projects from '../Data/Projects';
import './index.css'

const Home = () => {
    return (
        <div className='Main-container'>
            <div className='first-section'>
                <SquareUser />
                <span className='my-name'>MADHAN KUMAR M</span>
                <div className='my-links'>
                    <span>
                        <a href=''>madhankumarbusiness@gmail.com</a>
                    </span>
                    <span>
                        <a href=''>git</a>
                    </span>
                    <span>
                        <a href=''>
                            <Linkedin />
                        </a>
                    </span>
                </div>
            </div>

            <Divider />

            <div className='section'>
                <div className='title'>{about.title}</div>
                <div className='description'>{about.description}</div>
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
        </div>
    )
}

export default Home