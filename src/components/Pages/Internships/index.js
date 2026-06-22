import './index.css'
import internships from '../../Data/Work';
import { WorkResolve } from '../../utils/utils';

const Internships = () => {
    return (
        <div className='section'>
                <div className='title'>{internships.title}</div>

                <div className='skills-container'>
                    <WorkResolve work={internships.experiences} />
                </div>
            </div>
    );
}

export default Internships;