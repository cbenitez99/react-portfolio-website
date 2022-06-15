import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import pfp from '../../assets/images/IMG_1889.JPG';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';

 
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const wordArray = [
        'M','y', ' ', 'n','a','m','e',' ','i','s', ' ' , 'Cristian',' ','Benitez'
    ];

    useEffect(() => {
      return setTimeout(()=> {
          setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    
    return (
    <>
        <div className="container home-page">
        <img src={pfp} id="post-img" alt="cristian-b"/>
            <div className="text-zone">
                <h1>
                    <img src={pfp} id="post-img" alt="cristian-b"/>
                    <span className={`${letterClass} _11`}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o</span> 
                    <span className={`${letterClass} _16`}>,</span> 
                    <br/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={wordArray} 
                index={13}/> 
                </h1>
                <h2>
                    <strong>New Full-Stack Software Engineer with 500+ hours of practice.</strong>
                    <br/><br/>
                    <strong>Studied Languages/Frameworks:</strong>
                    <em> Ruby / JavaScript / React / Ruby on Rails</em> 
                    <br/>
                </h2>
                <Link to="/about" className="flat-button2">ABOUT</Link>
                <Link to="/projects" className="flat-button2">MY CODE</Link>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* <div className='scroll-about'>
                <About/>
            </div>
            <div className='scroll-project'>
                <Project/>
            </div>
            <div className='scroll-contact'>
                <Contact/>
            </div> */}
        </div>
        <Loader type='pacman'/>
    </>
    )
};

export default Home;