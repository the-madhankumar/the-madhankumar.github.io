import './index.css'
import contribution from '../../Data/Contribution';
import { ContributionResolve } from '../../utils/utils';

const Contributions = () => {
    return (
        <div className='section'>
                <div className='title'>{contribution.title}</div>

                <div className='skills-container'>
                    <ContributionResolve contributions={contribution.projects} />
                </div>
            </div>
    );
}

export default Contributions;