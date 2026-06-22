import { Linkedin, Github, Mail, SendHorizontal } from 'lucide-react';
import './index.css'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-content">

                    <SendHorizontal className="footer-icon" />

                    <div className="footer-links">
                        <a href="mailto:madhankumarbusiness@gmail.com">
                            <Mail size={16} /> madhankumarbusiness@gmail.com
                        </a>

                        <a
                            href="https://github.com/the-madhankumar"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={16} /> GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/themadhankumarm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin size={16} /> LinkedIn
                        </a>

                        <span className="footer-copy">
                            © {new Date().getFullYear()} Madhan Kumar M
                        </span>

                    </div>

                    <SendHorizontal className="footer-icon flip-icon" />

                </div>
            </footer>
    );
}

export default Footer;