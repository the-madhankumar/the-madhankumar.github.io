import './index.css'
import certificates from '../../Data/Certificates';
import { CertificatesResolve } from '../../utils/utils';

const Certifications = () => {
    return (
        <div className='section'>
            <div className='title'>{certificates.title}</div>

            <CertificatesResolve certificates={certificates.items} />
        </div>
    );
}

export default Certifications;