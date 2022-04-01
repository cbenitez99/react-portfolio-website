import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Image from '../../assets/images/IMG_0681.jpg'

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
      }, 4800)
    }, [])
    

    return (
    <>
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
                <h2><strong>// New Software Engineer \\</strong><br/><br/>Rails / JavaScript / React </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <img alt="me_and_gf"className="personal-img" src={Image}></img>
        </div>
        <Loader type='pacman'/>
    </>
    )
};

export default Home;