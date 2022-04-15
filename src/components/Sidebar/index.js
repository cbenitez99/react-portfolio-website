import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoC from '../../assets/images/logo-c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { fa500px, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img className="sub-logo" src={LogoC} alt="logo"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={fa500px} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

            
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://www.linkedin.com/in/cristian-benitez-985b56203/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://github.com/cbenitez99">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar;