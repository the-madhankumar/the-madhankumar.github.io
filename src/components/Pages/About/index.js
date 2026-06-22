import { FileText } from 'lucide-react';
import './index.css'
import about from '../../Data/About';

const About = () => {
    return (
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
    );
}

export default About;