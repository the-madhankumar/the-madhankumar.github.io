import './index.css'
import education from '../../Data/Education';
import { EducationResolve } from '../../utils/utils';

const Education = () => {
    return (
        <div className='section'>
                <div className='title'>{education.title}</div>

                <EducationResolve
                    education={education.items}
                    img={education.image}
                />
            </div>
    );
}

export default Education