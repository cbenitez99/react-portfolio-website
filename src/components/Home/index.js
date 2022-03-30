import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const wordArray = [
        'u', 'c', 'c', 'e', 's', 's', ' ', 
        'i','s',' ','n','o','t','h','i','n','g',
        ' ','s','h','o','r','t',' ','o','f',' ','a',
         ' ','b','l','e','s','s','i','n','g','.' 
    ];
    const nameArray = [
        '-', 'C', 'r', 'i', 's', 't', 'i', 'a', 'n', ' ', 
        'B', 'e', 'n', 'i', 't', 'e', 'z'
    ];

    useEffect(() => {
      return setTimeout(()=> {
          setLetterClass('text-animate-hover')
      }, 6500)
    }, [])
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o,</span> 
                    <br/>
                <img src={LogoS} alt="logo"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={wordArray} 
                index={16}/> 
                <br/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                index={23}/> 
                <br/>
                </h1>
                <h2>Software Engineer / JavaScript Student / Web Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
};

export default Home;