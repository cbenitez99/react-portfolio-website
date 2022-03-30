import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br/>
                <img src={LogoTitle} alt="logo"/>
                uccess is nothing more than a reward.
                <br/>
                - Cristian B. 
                </h1>
                <h2>Software Engineer / JavaScript Student / Web Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
};

export default Home;