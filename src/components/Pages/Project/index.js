import './index.css'
import projects from '../../Data/Projects';
import { ProjectsResolve } from '../../utils/utils';

const Project = () => {
    return (
        <div className='section'>
            <div className='title'>{projects.title}</div>

            <div className='skills-container'>
                <ProjectsResolve projects={projects.projects} />
            </div>
        </div>
    );
}

export default Project;