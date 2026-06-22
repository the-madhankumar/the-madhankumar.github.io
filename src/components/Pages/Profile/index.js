import './index.css'
import { SquareUser, Linkedin, Github, Mail, Moon, Sun, MapPin } from 'lucide-react';

const Profile = ({ toggle, darkMode }) => {
  return (
    <div className="first-section">
      <div className="profile">
        <SquareUser size={16} />

        <div className="start">
          <span className="my-name">MADHAN KUMAR M</span>

          <span className="my-location">
            <MapPin /> Chennai, India
          </span>
        </div>
      </div>

      <div className="my-links">
        <span className="email-link">
          <a href="mailto:madhankumarbusiness@gmail.com">
            madhankumarbusiness@gmail.com
          </a>
        </span>

        <span className="email-icon">
          <a href="mailto:madhankumarbusiness@gmail.com">
            <Mail size={18} />
          </a>
        </span>

        <span>
          <a
            href="https://github.com/the-madhankumar"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </span>

        <span>
          <a
            href="https://linkedin.com/in/themadhankumarm"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </span>

        <span onClick={toggle}>
          {darkMode ? <Moon /> : <Sun />}
        </span>
      </div>
    </div>
  );
};

export default Profile;