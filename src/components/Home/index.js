import { SquareUser, Linkedin } from 'lucide-react';
import about from '../Data/About';
import './index.css'

const Divider = () => {
    return <div className="divider"></div>
}

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

            <div className='second-section'>
                <div className='title'>{about.title}</div>
                <div className='description'>{about.description}</div>
            </div>
        </div> 
    )
}

export default Home