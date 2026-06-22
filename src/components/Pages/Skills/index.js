import './index.css'
import skills from '../../Data/Skills';
import { SkillsResolve } from '../../utils/utils';

const Skills = () => {
    return (
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
    );
}

export default Skills